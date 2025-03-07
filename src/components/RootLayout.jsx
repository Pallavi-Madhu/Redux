import React from 'react'
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <h1>Root layout</h1>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default RootLayout
