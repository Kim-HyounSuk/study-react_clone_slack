import React, { useCallback, useState } from 'react';
import axios from 'axios';

import {
	Header,
	Button,
	Form,
	Input,
	Label,
	LinkContainer,
	Error,
	Success,
} from '@pages/Signup/styles';
import useInput from '@/hooks/useinput';
import { Link } from 'react-router-dom';

const SignUp = () => {
	const { value: email, handler: onChangeEmail } = useInput('');
	const { value: nickname, handler: onChangeNickname } = useInput('');
	const { value: password, setValue: setPassword } = useInput('');
	const { value: passwordCheck, setValue: setPasswordCheck } = useInput('');
	const [mismatchError, setMismatchError] = useState(false);
	const [signupError, setSignupError] = useState('');
	const [signupSuccess, setSignupSuccess] = useState(false);

	const onChangePassword = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(e.target.value);
			setMismatchError(e.target.value !== passwordCheck);
		},
		[passwordCheck, setPassword],
	);

	const onChangePasswordCheck = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPasswordCheck(e.target.value);
			setMismatchError(e.target.value !== password);
		},
		[password, setPasswordCheck],
	);

	const onSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			setSignupSuccess(false);
			setSignupError('');
			if (!mismatchError && nickname) {
				console.log('서버로 회원가입하기');
				axios
					.post('/api/users', {
						email,
						nickname,
						password,
					})
					.then((res) => {
						setSignupSuccess(true);
						return res;
					})
					.catch((err) => {
						console.error(err.response);
						setSignupError(err.response.data);
					});
			}
		},

		[mismatchError, email, nickname, password],
	);

	return (
		<div id="container">
			<Header>Sleact</Header>
			<Form onSubmit={onSubmit}>
				<Label id="email-label">
					<span>이메일 주소</span>
					<div>
						<Input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={onChangeEmail}
						/>
					</div>
				</Label>
				<Label id="nickname-label">
					<span>닉네임</span>
					<div>
						<Input
							type="text"
							id="nickname"
							name="nickname"
							value={nickname}
							onChange={onChangeNickname}
						/>
					</div>
				</Label>
				<Label id="password-label">
					<span>비밀번호</span>
					<div>
						<Input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={onChangePassword}
							autoComplete="off"
						/>
					</div>
				</Label>
				<Label id="password-check-label">
					<span>비밀번호 확인</span>
					<div>
						<Input
							type="password"
							id="password-check"
							name="password-check"
							value={passwordCheck}
							onChange={onChangePasswordCheck}
							autoComplete="off"
						/>
					</div>
					{mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
					{signupError && <Error>{signupError}</Error>}
					{signupSuccess && (
						<Success>회원가입되었습니다! 로그인해주세요.</Success>
					)}
				</Label>
				<Button type="submit">회원가입</Button>
			</Form>
			<LinkContainer>
				이미 회원이신가요?&nbsp;
				<Link to="/login">로그인 하러가기</Link>
			</LinkContainer>
		</div>
	);
};

export default SignUp;
