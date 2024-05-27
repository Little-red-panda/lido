import { PaginationType } from '../../types/Pagination';

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationType) => {
	const handleClick = (page: number) => {
		onPageChange(page);
	};

	const renderPageNumbers = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(
				<button
					key={i}
					onClick={() => handleClick(i)}
					className={i === currentPage ? 'active' : ''}>
					{i}
				</button>
			);
		}
		return pages;
	};

	return (
		<div className="pagination">
			<button
				onClick={() => handleClick(currentPage - 1)}
				disabled={currentPage === 1}>
				Previous
			</button>
			{renderPageNumbers()}
			<button
				onClick={() => handleClick(currentPage + 1)}
				disabled={currentPage === totalPages}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
