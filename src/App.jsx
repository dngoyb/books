import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		console.log(title);
	};
	return (
		<div className=''>
			<BookCreate onCreateBook={createBook} />
		</div>
	);
}

export default App;
