"use client"

import React, { useState } from 'react';
import StarWarsCard from './card';
import axios from 'axios';
import { Endpoints } from '../config/endpoints.config';


interface ComponenteBProps {
    data: [{url:string, name:string}] | [ {url:string, title:string}] | [];
    endpoint: string;
  }

const StarWarsSearch: React.FC<ComponenteBProps> = ({ data, endpoint }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [dataPrint, setDataPrint] = useState<[{url:string, name:string}] | [ {url:string, title:string}] | []>(data);

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
          className="bg-yellow-600 rounded-2xl px-4 py-2 border-t border-b border-r border-gray-800 text-white hover:bg-yellow-500"
        >
          <span role="img" aria-label="Lupa">
            Search
          </span>         
        </button>
      </div>
     
     <div>
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
                            <StarWarsCard id={((el.url.split('https://swapi.dev/api/'))[1]).split('/')[1]} name={el.name??el.title} description={''} 
                            endpoint={endpoint}/>
                        ))
                    }
                    </div>
            </div>
          )
      }
     </div>
      
      
    </div>
  );
};

export default StarWarsSearch;
