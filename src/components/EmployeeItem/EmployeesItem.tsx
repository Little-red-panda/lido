import { EmployeeData } from '../../types/EmployeeData';
import ActionButton from '../ActionButton/ActionButton';

const EmployeeItem = ({
	id,
	name,
	last_name,
	middle_name,
	links,
}: EmployeeData) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{last_name}</td>
			<td>{name}</td>
			<td>{middle_name}</td>
			<td>
				{links?.map((item, index) => (
					<ActionButton
						key={index + item.title}
						title={item.title}
						url={item.url}
					/>
				))}
			</td>
		</tr>
	);
};

export default EmployeeItem;
