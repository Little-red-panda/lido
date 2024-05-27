export type Link = {
	url: string;
	title:
		| 'Получить сотрудника'
		| 'Обновить данные сотрудника'
		| 'Удалить сотрудника в корзину';
	method: 'GET' | 'PUT' | 'PATCH' | 'DELETE';
	permission_key: 'string';
};

export type EmployeeData = {
	id: string;
	last_name: string;
	name: string;
	middle_name: string;
	links: Link[];
};
export type ApiResponse = {
	data: EmployeeData[];
	paginate: {
		current_page: number;
		last_page: number;
	};
};
