import React from 'react';
import Airport from './subcomponents/airport';
import Hourly from './subcomponents/hourly';
import Outstation from './subcomponents/outstation';
import Selfdrive from './subcomponents/selfdrive';

function Main(){
  return (
    <>
      <main className="main-component">
          <Airport />
          <Hourly />
          <Outstation />
          <Selfdrive />
      </main>
    </>
  )
}

export default Main;