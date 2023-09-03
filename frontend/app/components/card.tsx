import React from 'react'

interface StarWarsCardProps {
  title: string;
  description: string;
}

const StarWarsCard: React.FC<StarWarsCardProps> = ({ title, description }) => {
  return (
    <div className="bg-black shadow-2xl  rounded-lg p-4 m-2 w-64 text-white ">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default StarWarsCard;