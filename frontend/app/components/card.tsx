import React, { useState } from 'react'
import CharacterChipProps from './character'

interface StarWarsCardProps {
  id: string
  name: string;
  description: string;
  endpoint:string;
}

const StarWarsCard: React.FC<StarWarsCardProps> = ({ id, name, description, endpoint }) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onClick = () =>{
    setIsPopupOpen(true);
  }

  const closeFunction = ()=>{
    setIsPopupOpen(false);
  }

  return (
    <>
    { isPopupOpen?
      <CharacterChipProps id={id} closeFunction={closeFunction} endpoint={endpoint} />
    :
      <div className="bg-[#13181f] shadow-2xl w-auto rounded-full p-4 m-2 text-white text-center cursor-pointer hover:opacity-70" onClick={onClick}>
        <h2 className="text-l text- font-thin mb-2">{name}</h2>
        <p>{description}</p>
      </div>
    }
    </>
    
  );
};

export default StarWarsCard;