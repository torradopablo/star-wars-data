"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Endpoints } from '../config/endpoints.config';


interface CharacterChipProps {
  id: string;
  closeFunction: ()=> void;
  endpoint:string;
}

const CharacterChip: React.FC<CharacterChipProps> = ({ id, closeFunction, endpoint }) => {

    const [data, setData] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);


    function CharacterObject(obj: any): string {
        let text =`Name: ${obj.name}\n`;
        text += `Films: ${obj.films.join(', ')}\n`;
        text += `Species: ${obj.species.join(', ')}\n`;
        text += `Vehicles: ${obj.vehicles.join(', ')}\n`;
        text += `Starships: ${obj.starships.join(', ')}\n`;
        return text;
    }

    function FilmObject(obj: any): string {
        let text =`Title: ${obj.title}\n`;
        text += `Characters: ${obj.characters.join(', ')}\n`;
        text += `Planets: ${obj.planets.join(', ')}\n`;
        text += `Vehicles: ${obj.vehicles.join(', ')}\n`;
        text += `Starships: ${obj.starships.join(', ')}\n`;
        text += `Species: ${obj.species.join(', ')}\n`;
        return text;
    }

    function ObjectStartShips(obj: any): string {
        let text =`Name: ${obj.name}\n`;
        text += `Pilots: ${obj.pilots.join(', ')}\n`;
        text += `Films: ${obj.films.join(', ')}\n`;
        return text;
    }

    function ObjectPlanets(obj: any): string {
        let texto =`Name: ${obj.name}\n`;
        texto += `Residents: ${obj.residents.join(', ')}\n`;
        texto += `Films: ${obj.films.join(', ')}\n`;
        return texto;
    }

    useEffect(() => {
        axios.get(`${Endpoints.apiUrl}/${endpoint}/${id}/details`).then((resData)=>{
            switch(endpoint){
                case "characters":
                    setData(CharacterObject(resData.data));
                    break;
                case "films":
                    setData(FilmObject(resData.data));
                    break;
                case "starships":
                    setData(ObjectStartShips(resData.data));
                    break;
                case "planets":
                    setData(ObjectPlanets(resData.data));
                    break;
            }
            setLoading(false);
        })
      }, [id, endpoint]);

  return (
    <div>
        {
        loading ? (<p className="mt-7  text-gray-800">Loading...</p>) 
        :( 
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div className="text-black w-auto h-auto m-3 top-0 left-0 mt-8 bg-white border border-gray-300 p-4 rounded-lg shadow-lg">
            <p className='py-7' dangerouslySetInnerHTML={{ __html: data.replace(/\n/g, '<br>') }} />
            <button
                className="text-blue-500 hover:underline mt-2 cursor-pointer"
                onClick={closeFunction}
            >
                Close
            </button>
            </div>
        </div>)
        } 
    </div>
       
   
  );
};

export default CharacterChip;
