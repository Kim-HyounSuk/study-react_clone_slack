import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

type TUseInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
interface IUseInputReturn<T> {
	value: T;
	handler: TUseInputHandler;
	setValue: Dispatch<SetStateAction<T>>;
}

const useInput = <T>(initialData: T): IUseInputReturn<T> => {
	const [value, setValue] = useState(initialData);
	const handler: TUseInputHandler = useCallback((e) => {
		setValue(e.target.value as T);
	}, []);

	return { value, handler, setValue };
};

export default useInput;
