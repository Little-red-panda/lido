import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import EmployeesList from '../EmployeeList/EmployeesList';
import PublicRoute from '../PublicRoute/PublicRoute';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/UserProcess/selector';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const App = () => {
	const authorizationStatus = useAppSelector(getAuthorizationStatus);

	return (
		<RouterProvider
			router={createBrowserRouter([
				{
					path: '/',
					element: (
						<PublicRoute authorizationStatus={authorizationStatus}>
							<Login />
						</PublicRoute>
					),
				},
				{
					path: '/employees',
					element: (
						<PrivateRoute authorizationStatus={authorizationStatus}>
							<EmployeesList />
						</PrivateRoute>
					),
				},
				{
					path: '*',
					element: (
						<main>
							<h1>Страница не найдена</h1>
						</main>
					),
				},
			])}
		/>
	);
};

export default App;

