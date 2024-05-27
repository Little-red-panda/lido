import s from './Loading.module.css';

export const Loading = () => (
	<div className={s.wrap}>
		<div className={s.spinner}></div>
	</div>
);
