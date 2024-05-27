const enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
}

const enum AppRoute {
	Login = '/',
	Employees = '/employees',
}

const enum APIRoute {
	Login = '/api/v1/login',
	Employee = '/api/v1/crm/employee',
}

const enum NameSpace {
	User = 'user',
	Employees = 'employee',
}

export { AuthorizationStatus, AppRoute, APIRoute, NameSpace };
