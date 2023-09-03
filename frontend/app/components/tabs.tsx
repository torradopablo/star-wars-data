"use client"

import { Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import  StarWarsCard  from './card';

function StarWarsTabs() {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper className="bg-gradient-to-r from-indigo-900 text-white w-full h-screen mx-auto" elevation={3}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        centered
        className="space-x-4 text-white"
      >
        <Tab
          label="Characters"
          className="font-starjedi text-white"
        />
        <Tab
          label="Films"
          className="font-starjedi text-white"
        />
        <Tab
          label="Starships"
          className="font-starjedi text-white"
        />
        <Tab
          label="Planets"
          className="font-starjedi text-white"
        />
      </Tabs>

      <div
        className="flex justify-center items-center h-full text-xl"
      >
        {tabValue === 0 && (
          <div>
            <p>Lista de personajes de Star Wars.</p>
            {/* Agrega aquí tu contenido para la pestaña de personajes */}
          </div>
        )}
        {tabValue === 1 && (
          <div>
            <p>Lista de planetas de Star Wars.</p>
            {/* Agrega aquí tu contenido para la pestaña de planetas */}
          </div>
        )}
        {tabValue === 2 && (
          <div>
            <p>Lista de naves de Star Wars.</p>
            {/* Agrega aquí tu contenido para la pestaña de naves */}
          </div>
        )}
        {tabValue === 3 && (
          <div>
            <StarWarsCard
        title="Luke Skywalker"
        description="A Jedi Knight who fought in the Galactic Civil War."
      />
            {/* Agrega aquí tu contenido para la pestaña de naves */}
          </div>
        )}
      </div>
    </Paper>
  );
}

export default StarWarsTabs;
