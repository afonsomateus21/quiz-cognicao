import React, { ReactNode, createContext, useContext, useState } from 'react';
// @ts-ignore
import useSound from 'use-sound';

// Crie o contexto
const AudioContext = createContext({
  play: () => {},
  stop: () => {},
  startAudio: () => {},
  stopAudio: () => {}
});

// Hook personalizado para acessar o contexto
export const useAudio = () => useContext(AudioContext);

interface AudioProviderProps {
  children: ReactNode;
}

// Provedor do contexto
export const AudioProvider = ({ children }: AudioProviderProps) => {
  const [play, { stop }] = useSound('/caminho/do/arquivo/audio.mp3');
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Função para iniciar o áudio
  const startAudio = () => {
    setAudioEnabled(true);
  };

  // Função para parar o áudio
  const stopAudio = () => {
    stop();
    setAudioEnabled(false);
  };

  return (
    <AudioContext.Provider value={{ play, stop, startAudio, stopAudio }}>
      {children}
    </AudioContext.Provider>
  );
};