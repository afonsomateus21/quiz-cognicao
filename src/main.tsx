import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { Question } from './pages/Question.tsx';
import { DecisionContinueOrStudy } from './pages/DecisionContinueOrStudy.tsx';

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
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
