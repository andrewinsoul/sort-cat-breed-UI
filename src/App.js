/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { useState } from 'react';
import CatList from './components/CatList';
import FilterBar from './components/Search';

/**
 *
 * @returns {JSX} - returns the JSX for the base component
 */
const App = () => {
  const [limit, setLimit] = useState(12);
  const [catBreed, setCatBreed] = useState('any');
  return (

    <div className="App">
      <div className="fixed-widget">
        <div className="Navbar">
          <img src="/logo192.png" alt="app icon" className="logo" />
          <p className="title">CatSort</p>
        </div>
        <div>
          <h5 className="info">
            Let us help you sort the cats in descending
            order based on certain attributes
          </h5>
          <FilterBar
            limit={limit}
            setLimit={setLimit}
            setCatBreed={setCatBreed}
          />

        </div>
      </div>
      <section className="App-header">
        <CatList
          limit={limit}
          setLimit={setLimit}
          catBreed={catBreed}
          setCatBreed={setCatBreed}
        />
      </section>
    </div>

  );
};

export default App;
