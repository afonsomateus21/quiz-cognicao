import { ReactNode, createContext, useContext, useState } from "react";
import Heart from "../assets/lime-heart.png";

interface PlayerContextData {
  playerLives: string[];
  cogncoinsAmount: number;
  setPlayerLives: (playerLives: string[]) => void;
  handleGainCognCoins: () => void;
  handleLoseCognCoins: () => void;
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

  function handleGainCognCoins() {
    setCongncoinsAmount(prev  => prev + 1);
  }

  function handleLoseCognCoins() {
    setCongncoinsAmount(
      prev => {
        if (prev == 0) {
          return prev;
        }

        return prev - 1
      }
    );
  }

  return (
    <PlayerContext.Provider value={{ playerLives, cogncoinsAmount, setPlayerLives, handleGainCognCoins, handleLoseCognCoins }}>
      { children }
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  return context;
}