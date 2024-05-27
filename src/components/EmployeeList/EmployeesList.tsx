import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
	getEmployees,
	getEmployeesLoadingStatus,
	getErrorStatus,
} from '../../store/EmployeesData/selector';
import EmployeeItem from '../EmployeeItem/EmployeesItem';
import s from './EmployeesList.module.css';
import { fetchEmployeesAction } from '../../store/api-actions';
import Pagination from '../Pagination/Pagination';
import { Loading } from '../Loading/Loading';

const EmployeeList = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const dispatch = useAppDispatch();
	const employeesData = useAppSelector(getEmployees);
	const loading = useAppSelector(getEmployeesLoadingStatus);
	const error = useAppSelector(getErrorStatus);
	const employees = employeesData?.data;
	const pagination = employeesData?.paginate;
	let totalPages = 1;
	if (pagination) {
		totalPages = pagination.last_page;
	}

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		dispatch(fetchEmployeesAction(currentPage));
	}, [currentPage, dispatch]);

	if (loading || !employees) return <Loading />;
	if (error) {
		return <div>Ошибка: ${error}</div>;
	}

	return (
		<>
			<h1>Сотрудники</h1>
			<table className={s.table}>
				<thead>
					<tr>
						<th>id</th>
						<th>Фамилия</th>
						<th>Имя</th>
						<th>Отчество</th>
						<th>Действия</th>
					</tr>
				</thead>
				<tbody>
					{employees?.map((item) => (
						<EmployeeItem key={item.id} {...item} />
					))}
				</tbody>
			</table>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</>
	);
};

export default EmployeeList;
