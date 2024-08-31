import { Link } from 'react-router-dom';
import {
	Button,
	Error,
	Form,
	Header,
	Input,
	Label,
	LinkContainer,
} from './styles';
import { useCallback, useState } from 'react';
import useInput from '@/hooks/useinput';
import axios from 'axios';

const Login = () => {
	const [loginError, setLoginError] = useState(false);
	const { value: email, handler: onChangeEmail } = useInput('');
	const { value: password, handler: onChangePassword } = useInput('');

	const onSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			setLoginError(false);

			axios
				.post('/api/users/login', {
					email,
					password,
				})
				.then(() => {})
				.catch((err) => {
					setLoginError(err.response.data.status === 401);
				});
		},

		[email, password],
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
				<Button type="submit">로그인</Button>
			</Form>
			{loginError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
			<LinkContainer>
				아직 회원이 아니신가요?&nbsp;
				<Link to="/signup">회원가입 하러가기</Link>
			</LinkContainer>
		</div>
	);
};

export default Login;
