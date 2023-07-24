import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
	const [showEdidt, setShowEdit] = useState(false);

	const handleSubmit = (id, newTitle) => {
		setShowEdit(!showEdidt);
		onEdit(id, newTitle);
	};

	let content = <h3>{book.title}</h3>;
	if (showEdidt) {
		content = <BookEdit book={book} onSubmit={handleSubmit} />;
	}
	return (
		<div className='book-show'>
			<img
				src={`https://picsum.photos/seed/${book.id}/300/200`}
				alt='Book Image'
			/>
			{content}
			<div className='actions'>
				<button className='edit' onClick={handleSubmit}>
					Edit
				</button>
				<button className='delete' onClick={() => onDelete(book.id)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default BookShow;
