import { ChangeEvent, FormEvent, useState } from 'react';
import s from './Login.module.css';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';

const Login = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useAppDispatch();

	const isNeedDisable = !login || !password;

	const handleLoginChange = (evt: ChangeEvent<HTMLInputElement>) => {
		setLogin(evt.target.value);
	};

	const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
		setPassword(evt.target.value);
	};

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		dispatch(
			loginAction({
				login: login,
				password: password,
			})
		);
	};

	return (
		<main className={s.login}>
			<h1>Авторизация</h1>
			<form className={s.form} action="" method="post" onSubmit={handleSubmit}>
				<div className={s.inputWrap}>
					<label className={s.label}>Логин</label>
					<input
						value={login}
						onChange={handleLoginChange}
						className={s.input}
						type="login"
						name="login"
						placeholder="Логин"
						required
					/>
				</div>
				<div className={s.inputWrap}>
					<label className={s.label}>Пароль</label>
					<input
						value={password}
						onChange={handlePasswordChange}
						className={s.input}
						type="password"
						name="password"
						placeholder="Пароль"
						required
					/>
				</div>
				<button className={s.button} type="submit" disabled={isNeedDisable}>
					Войти
				</button>
			</form>
		</main>
	);
};

export default Login;
