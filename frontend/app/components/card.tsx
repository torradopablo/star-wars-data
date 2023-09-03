import React from 'react'

interface StarWarsCardProps {
  name: string;
  description: string;
}

const StarWarsCard: React.FC<StarWarsCardProps> = ({ name, description }) => {
  return (
    <div className="bg-[#13181f]  shadow-2xl w-auto rounded-full p-4 m-2 text-white text-center ">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default StarWarsCard;