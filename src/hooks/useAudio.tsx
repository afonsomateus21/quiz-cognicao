import { ReactNode, createContext, useContext, useState } from "react";

interface AudioContextData {
  audio: HTMLAudioElement;
}

interface AudioProviderProps {
  children: ReactNode
}

const AudioContext = createContext<AudioContextData>(
  {} as AudioContextData
);

export function AudioProvider({ children }: AudioProviderProps) {
  const [ audio ] = useState(new Audio("../assets/theme.mp3"));
  
  return (
    <AudioContext.Provider value={{ audio }}>
      { children }
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext);

  return context;
}