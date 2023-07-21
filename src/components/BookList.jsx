import BookShow from './BookShow';

const BookList = ({ books }) => {
	const renderedBooks = books.map((book) => (
		<BookShow key={book.id} book={book} />
	));
	return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
