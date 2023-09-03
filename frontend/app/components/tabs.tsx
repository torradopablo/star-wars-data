"use client"

import React, { useState } from 'react';
import { Endpoints } from '../config/endpoints.config';
import StarWarsSearch from './searcher';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Characters');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<[{name:string}] | [ {little:string}] | [] >([]);

  const handleTabClick = async (tabName: string, endpoint: string) => {
    try {
      setLoading(true);

      //const response = await fetch(`https://swapi.dev/api/${endpoint}/`);
      const response = await fetch(`${Endpoints.apiUrl}/${endpoint}/`);
      const jsonData = await response.json();

      setData(jsonData.results);
      setActiveTab(tabName);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen md:p-4 p-2 items-center  ">
      <div className="flex md:space-x-10 space-x-3  ">
        <button
          onClick={() => handleTabClick('Characters', 'characters')}
          className={`px-4 py-2 border rounded-3xl   ${
            activeTab === 'Characters' ? 'bg-gray-800 text-yellow-600' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Characters
        </button>
        <button
          onClick={() => handleTabClick('Films', 'films')}
          className={`px-4 py-2 border rounded-3xl ${
            activeTab === 'Films' ? 'bg-gray-800 text-yellow-600' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Films
        </button>
        <button
          onClick={() => handleTabClick('Starships', 'starships')}
          className={`px-4 py-2 border rounded-3xl ${
            activeTab === 'Starships' ? 'bg-gray-800 text-yellow-600' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Starships
        </button>
        <button
          onClick={() => handleTabClick('Planets', 'planets')}
          className={`px-4 py-2 border rounded-3xl ${
            activeTab === 'Planets' ? 'bg-gray-800 text-yellow-600' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Planets
        </button>
      </div>

      <div className="mt-20  w-full flex flex-col items-center justify-center ">
        {loading ? (
          <p className="mt-7  text-gray-800">Loading...</p>
        ) : (
          <StarWarsSearch data={data} endpoint={activeTab.toLowerCase()}/>
        )}
      </div>
    </div>
  );
};

export default Tabs;
