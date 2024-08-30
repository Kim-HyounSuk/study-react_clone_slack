import React, { useCallback, useState } from 'react';
import {
	Header,
	Button,
	Form,
	Input,
	Label,
	LinkContainer,
} from '@pages/Signup/styles';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const onChangeEmail = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setEmail(e.target.value);
		},
		[],
	);

	const [nickname, setNickname] = useState('');
	const onChangeNickname = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setNickname(e.target.value);
		},
		[],
	);

	const [password, setPassword] = useState('');
	const onChangePassword = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(e.target.value);
		},
		[],
	);

	const [passwordCheck, setPasswordCheck] = useState('');
	const onChangePasswordCheck = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPasswordCheck(e.target.value);
		},
		[],
	);

	const onSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			console.log({
				email,
				password,
				nickname,
				passwordCheck,
			});
		},
		[email, password, nickname, passwordCheck],
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
						/>
					</div>
					{/*{mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}*/}
					{/*{signUpError && <Error>{signUpError}</Error>}*/}
					{/*{signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}*/}
				</Label>
				<Button type="submit">회원가입</Button>
			</Form>
			<LinkContainer>
				이미 회원이신가요?&nbsp;
				<a href="/login">로그인 하러가기</a>
			</LinkContainer>
		</div>
	);
};

export default SignUp;
