"use client"

import { Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import  Table  from './table';

function StarWarsTabs() {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper className="bg-black bg-opacity-80  text-white w-full h-screen mx-auto " elevation={3}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        centered
        indicatorColor="primary"
        textColor="inherit"
        className="space-x-4"
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
            <Table />
            {/* Agrega aquí tu contenido para la pestaña de naves */}
          </div>
        )}
      </div>
    </Paper>
  );
}

export default StarWarsTabs;
