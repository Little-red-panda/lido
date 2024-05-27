import { Link } from 'react-router-dom';
import { ActionButtonType } from '../../types/ActionButton';
import { DeleteIcon, EditIcon, ViewIcon } from '../Icons/Icons';

const ActionButton = ({ title, url }: ActionButtonType) => {
	const renderIcon = () => {
		switch (title) {
			case 'Получить сотрудника':
				return <ViewIcon />;
			case 'Обновить данные сотрудника':
				return <EditIcon />;
			case 'Удалить сотрудника в корзину':
				return <DeleteIcon />;
			default:
				return null;
		}
	};
	return <Link to={url}>{renderIcon()}</Link>;
};

export default ActionButton;
