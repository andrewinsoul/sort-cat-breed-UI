import React, { useState } from 'react';

const FilterBar = ({
  setLimit,
  setCatBreed,
}) => {
  const [inputText, setInputText] = useState('');
  const [catBreedLocal, setCatBreedLocal] = useState('any');
  return (
    <div className="filter-panel">
      <div className="input-container">
        <label
          htmlFor="limit"
          className="input-label"
        >
          Number Of Breeds:
          {' '}

        </label>
        <input
          id="limit"
          value={inputText}
          className="input-widget"
          placeholder="All"
          onChange={(event) => setInputText(event.target.value)}
        />
      </div>

      <div className="input-container">
        <label
          htmlFor="breed"
          className="input-label"
        >
          Sort Breed By:
          {' '}

        </label>
        <select
          id="breed"
          value={catBreedLocal}
          className="input-widget"
          onChange={(event) => setCatBreedLocal(event.target.value)}
        >
          <option value="any">Any</option>
          <option value="children friendly">Children Friendly</option>
          <option value="stranger friendly">Stranger Friendly</option>
          <option value="dog friendly">Dog Friendly</option>
        </select>

      </div>

      <button
        className="queryButton"
        onClick={() => {
          setLimit(inputText);
          setCatBreed(catBreedLocal);
        }}
      >
        <p className="btn-text">Sort</p>
      </button>
    </div>

  );
};

export default FilterBar;
