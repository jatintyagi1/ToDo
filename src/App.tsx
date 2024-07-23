import React, { useState } from 'react';
import './App.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./routes";

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
