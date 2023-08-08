import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookEdit = ({ book, onSubmit }) => {
	const [title, setTitle] = useState(book.title);
	const { editBookById } = useBooksContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
		editBookById(book.id, title);
	};
	return (
		<form className='book-edit' onSubmit={handleSubmit}>
			<label>Title</label>
			<input
				type='text'
				className='input'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button className='button is-primary'>Save</button>
		</form>
	);
};

export default BookEdit;
