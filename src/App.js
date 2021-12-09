import { useEffect, useState } from 'react';
import './App.css';

const getUser = () => Promise.resolve({ id: 1, name: 'Pavel' });

const Search = ({ value, onChange, children }) => (
  <div className="App-search_input">
    <label htmlFor="search">{children}</label>
    <input id="search" name="search" placeholder="ищем..." value={value} onChange={onChange} />
  </div>
);

function App() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const userData = async () => {
      const user = await getUser();
      setUser(user);
    };

    userData();
  }, []);

  const handlerSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <section className="App-search">
      {user && <h2>Добрый день {user.name}</h2>}
      <img src="" alt="Логотип" />
      <Search value={search} onChange={handlerSearch}>
        Что ищем?
      </Search>
      <p>Поисковое значение {search ? search : '...'}</p>
    </section>
  );
}

export default App;
