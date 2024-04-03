import { ReactNode, createContext, useContext, useState } from "react";
import Heart from "../assets/lime-heart.png";

interface PlayerContextData {
  playerLives: string[];
  cogncoinsAmount: number;
  setPlayerLives: (playerLives: string[]) => void;
  setCogncoinsAmount: (cogncoinsAmount: number) => void;
  handleGainCognCoins: () => void;
  handleLoseCognCoins: () => void;
  resetPlayerLivesAndCoins: () => void;
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
  
  const [cogncoinsAmount, setCogncoinsAmount] = useState(0);

  function handleGainCognCoins() {
    setCogncoinsAmount(prev  => prev + 1);
  }

  function handleLoseCognCoins() {
    setCogncoinsAmount(
      prev => {
        if (prev == 0) {
          return prev;
        }

        return prev - 1
      }
    );
  }

  function resetPlayerLivesAndCoins() {
    setCogncoinsAmount(0);
    setPlayerLives([ Heart, Heart, Heart ]);
  }

  return (
    <PlayerContext.Provider 
      value={{ 
        playerLives, 
        cogncoinsAmount, 
        setCogncoinsAmount, 
        setPlayerLives, 
        handleGainCognCoins, 
        handleLoseCognCoins,
        resetPlayerLivesAndCoins 
      }}>
      { children }
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  return context;
}