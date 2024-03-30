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
        path: "/question",
        element: <Question />
      },
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
    element: <PositiveReinforcement />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
