import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		const updatedBooks = [
			...books,
			{ id: Math.round(Math.random() * 9999), title },
		];
		setBooks(updatedBooks);
	};

	const deleteBookById = (id) => {};
	return (
		<div className='app'>
			<BookList books={books} />
			<BookCreate onCreateBook={createBook} />
		</div>
	);
}

export default App;
