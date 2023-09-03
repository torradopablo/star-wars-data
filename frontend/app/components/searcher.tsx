"use client"

import React, { useState } from 'react';
import StarWarsCard from './card';
import axios from 'axios';
import { Endpoints } from '../config/endpoints.config';


interface ComponenteBProps {
    data: [{name:string}] | [ {little:string}] | [];
    endpoint: string;
  }

const StarWarsSearch: React.FC<ComponenteBProps> = ({ data, endpoint }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [dataPrint, setDataPrint] = useState<[{name:string}] | [ {little:string}] | []>(data);

  const handleSearch = async () => {
    setLoading(true)
    const { data } = await axios.get(`${Endpoints.apiUrl}/${endpoint}/?search=${searchTerm}`);
    setDataPrint(data.results)
    setLoading(false)
  };



  return (
    <div className="flex flex-col justify-center items-center mt-8 ">
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Search en Star Wars"
          className="rounded-2xl mr-2 p-2 outline-none border-t border-b border-l text-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 rounded-2xl px-4 py-2 border-t border-b border-r border-gray-800 text-white hover:bg-yellow-600"
        >
          <span role="img" aria-label="Lupa">
            Search
          </span>         
        </button>
      </div>
      {
        loading ? (
            <p className="mt-7  text-gray-800">Loading...</p>
          ) : (
            <div className="container mx-auto mt-24 ">
                    <div className="text-white grid sm:grid-cols-1 md:grid-cols-4 grid-cols-2 gap-4">
                    {
                        // eslint-disable-next-line react/jsx-key
                        dataPrint.map((el: any) => (
                            // eslint-disable-next-line react/jsx-key
                            <StarWarsCard name={el.name??el.title} description={''}/>
                        ))
                    }
                    </div>
            </div>
          )
      }
      
    </div>
  );
};

export default StarWarsSearch;
