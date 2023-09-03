"use client"

import React, { useState } from 'react';
import StarWarsCard from './card';

interface ComponenteBProps {
    data: any[];
  }

const StarWarsSearch: React.FC<ComponenteBProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    alert(`Buscando: ${searchTerm}`);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 ">
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Buscar en Star Wars"
          className="rounded-l-md p-2 outline-none border-t border-b border-l text-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 rounded-r-md px-4 py-2 border-t border-b border-r border-gray-800 text-white hover:bg-yellow-600"
        >
          <span role="img" aria-label="Lupa">
            Search
          </span>         
        </button>
      </div>
      <div className="container mx-auto mt-24 ">
        <div className="text-white grid sm:grid-cols-1 md:grid-cols-4 grid-cols-2 gap-4">
        {
            data.map((el: Object) => (
              <StarWarsCard name={el.name??el.title} description={''}/>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default StarWarsSearch;
