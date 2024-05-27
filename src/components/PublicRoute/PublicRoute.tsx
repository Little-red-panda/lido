import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PublicRouteProps = {
	authorizationStatus: AuthorizationStatus;
	children: JSX.Element;
};

function PublicRoute(props: PublicRouteProps) {
	const { authorizationStatus, children } = props;

	return authorizationStatus === AuthorizationStatus.NoAuth ? (
		children
	) : (
		<Navigate to={AppRoute.Employees} />
	);
}

export default PublicRoute;

