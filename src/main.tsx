import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { Question } from './pages/Question.tsx';
import { DecisionContinueOrStudy } from './pages/DecisionContinueOrStudy.tsx';
import { ReinforcementsDescription } from './pages/ReinforcementsDescription.tsx';
import { PositiveReinforcement } from './pages/PositiveReinforcement.tsx';
import { NegativeReinforcement } from './pages/NegativeReinforcement.tsx';
import { GameOver } from './pages/GameOver.tsx';
import { PlayerProvider } from './hooks/usePlayer.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/questions",
        element: <Question />
      },
      {
        path: "/game-over",
        element: <GameOver />
      }
    ]
  }, 
  {
    path: "/decision-continue-or-study",
    element: <DecisionContinueOrStudy />
  },
  {
    path: "/reinforcements",
    element: <ReinforcementsDescription />
  },
  {
    path: "/reinforcements/positive-reinforcement",
    element: <PositiveReinforcement />
  },
  {
    path: "/reinforcements/negative-reinforcement",
    element: <NegativeReinforcement />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlayerProvider>
      <RouterProvider router={router} />
    </PlayerProvider>
  </React.StrictMode>,
)
