import { useId } from 'react';
import css from './SearchForm.module.css';

export default function SearchForm({ onSearch }) {
    const searchId = useId();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        onSearch(form.elements.search.value);
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={searchId}>
                <input
                    className={css.input}
                    type='text'
                    name='search'
                    id={searchId}
                    placeholder="Enter the movie's title here"
                />
            </label>
            <button type='submit'>Search</button>
        </form>
    );
}