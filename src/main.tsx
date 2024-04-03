import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { PlayerProvider } from './hooks/usePlayer.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlayerProvider>
      <RouterProvider router={router} />
    </PlayerProvider>
  </React.StrictMode>,
)
