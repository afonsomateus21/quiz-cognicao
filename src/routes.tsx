import { createBrowserRouter } from 'react-router-dom';

import App from './App.tsx'
import { Home } from './pages/Home.tsx';
import { Question } from './pages/Question.tsx';
import { DecisionContinueOrStudy } from './pages/DecisionContinueOrStudy.tsx';
import { ReinforcementsDescription } from './pages/ReinforcementsDescription.tsx';
import { PositiveReinforcement } from './pages/PositiveReinforcement.tsx';
import { NegativeReinforcement } from './pages/NegativeReinforcement.tsx';
import { GameOver } from './pages/GameOver.tsx';
import { GameWinner } from './pages/GameWinner.tsx';
import { About } from './pages/About.tsx';
import { CreditsAndReference } from './pages/CreditsAndReference.tsx';
import { ReinforcementsBook } from './pages/ReiforcementsBook.tsx';

export const router = createBrowserRouter([
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
  {
    path: "/game-winner",
    element: <GameWinner />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/credits",
    element: <CreditsAndReference />
  },
  {
    path: "/reinforcements-book",
    element: <ReinforcementsBook />
  }
])