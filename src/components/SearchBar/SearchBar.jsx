import styled from './SeaechBar.module.css';
import search from '../../assets/search-svgrepo-com.svg';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <div className={styled.header}>
      <header>
        <form onSubmit={handleSubmit} className={styled.form}>
          <button type="submit">
            <img src={search} alt="Search Icon" />
          </button>
          <input
            className={styled.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
