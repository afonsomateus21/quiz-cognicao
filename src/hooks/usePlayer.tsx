import { ReactNode, createContext, useState } from "react";
import Heart from "../assets/lime-heart.png";

interface PlayerContextData {
  playerLives: string[];
  cogncoinsAmount: number;
  setPlayerLives: (playerLives: string[]) => void;
  setCongncoinsAmount: (cogncoinsAmount: number) => void;
}

interface PlayerProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext<PlayerContextData>(
  {} as PlayerContextData
);

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [playerLives, setPlayerLives] = useState([
    Heart, Heart, Heart
  ]);
  
  const [cogncoinsAmount, setCongncoinsAmount] = useState(0);

  return (
    <PlayerContext.Provider value={{ playerLives, cogncoinsAmount, setPlayerLives, setCongncoinsAmount  }}>
      { children }
    </PlayerContext.Provider>
  )
}