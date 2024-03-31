import { ReactNode, createContext, useContext, useState } from "react";
import theme from '../assets/theme.mp3';
// @ts-ignore
import useSound from 'use-sound';

interface AudioContextData {
  audio: any;
}

interface AudioProviderProps {
  children: ReactNode
}

const AudioContext = createContext<AudioContextData>(
  {} as AudioContextData
);

export function AudioProvider({ children }: AudioProviderProps) {
  const [ audio ] = useSound(theme);
  
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