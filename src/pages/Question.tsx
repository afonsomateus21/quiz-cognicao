import Heart from "../assets/lime-heart.png";
import Cogncoin from "../assets/cogncoin.png";
import { QuestionOption } from "../components/QuestionOption";
import { useEffect, useRef, useState } from "react";
import { QuestionButton } from "../components/QuestionButton";
import { questions } from "../constants/questions";
import theme from '../assets/theme.mp3';
// @ts-ignore
import useSound from 'use-sound';
import { useNavigate } from "react-router-dom";

export function Question() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [idCorrect, setIdCorrect] = useState('');
  const [selectedAnswerId, setSelectedAnswerId] = useState('');
  const [cogncoinsAmount, setCongncoinsAmount] = useState(0);
  const [timer, setTimer] = useState(30);
  const [playerLives, setPlayerLives] = useState([
    Heart, Heart, Heart
  ]) 
  const [playbackRate, setPlaybackRate] = useState(1);

  const [play, { stop } ] = useSound(theme, {
    playbackRate,
    interrupt: true,
  });
  const stopRef = useRef<() => void>();
  const [canStartGame, setCanStartGame] = useState(false);
  const [ wasAnswered, setWasAnswered ] = useState(false);

  function getOrderLetter(index: number) {
    const letters = ['A', 'B', 'C', 'D'];
    return letters[index];
  }

  function handleWasteLive() {
    if (setPlayerLives.length > 0) {
      const newArray = [...playerLives.slice(0, -1)];

      if (newArray.length === 0) {
        if (stopRef.current) stopRef.current();
        return navigate("/game-over");
      }

      setPlayerLives(newArray);
    }
  }

  function handleStartGame() {
    play();
    setCanStartGame(true);
  }

  function handleAnswer(isCorrect: boolean, id: string) {
    setSelectedAnswerId(id);
    setWasAnswered(true);
    if (isCorrect) {
      setIdCorrect(id);
      setCongncoinsAmount(prev => prev + 1);
      setTimer(prev => prev + 5);
      setPlaybackRate(playbackRate - 0.1);
    } else {
      setIdCorrect('');
      setCongncoinsAmount(
        prev => {
          if (prev == 0) {
            return prev;
          }

          return prev - 1
        }
      );
      handleWasteLive();
    }
  }

  useEffect(() => {
    console.log(wasAnswered)
  }, [wasAnswered])

  function handleChangeQuestion() {
    if (index < questions.length - 1) {
      setIndex(prev => prev + 1);
      setWasAnswered(false);
    } else {
      if (stopRef.current) stopRef.current();
    }
  }

  useEffect(() => {
    stopRef.current = stop;
  }, [stop]);

  useEffect(() => {
    if (canStartGame) {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 0) {
            clearInterval(intervalId);
            if (stopRef.current) stopRef.current();
            return prevTimer;
          }
  
          setPlaybackRate(prevRate => {
            if (prevTimer <= 10) {
              return prevRate + 0.1; 
            } else {
              return prevRate;
            }
          });
  
          return prevTimer - 1;
        });
      }, 1000);
  
      return () => clearInterval(intervalId);
    } 
  }, [canStartGame]); 

  return (
    <div className="p-2 md:p-6 lg:p-2 my-0 mx-auto h-full w-full md:h-3/4 lg:w-3/4 flex flex-col justify-between items-center">
      <section className="w-full flex items-center justify-between">
        <div className="bg-yellow-600 size-16 md:size-28 rounded-full flex justify-center items-center">
          <span className="text-2xl md:text-7xl font-bold text-white">
            {  
              canStartGame ?
                index + 1
              :
                ""
            }
          </span>
        </div>

        <div className="grid grid-cols-2 items-center gap-8">
          <div className="flex">
            {
              playerLives.map((playerLive, index) => (
                <img key={index} className="size-8 md:size-12" src={playerLive} alt="Ilustração de um coração verde que representa uma vida" />
              ))
            }
          </div>

          <div className="bg-white w-20 md:w-36 h-10 md:h-14 rounded-xl flex justify-start p-4 md:p-0 md:justify-center items-center relative">
            <span className="text-3xl text-lime-900 font-bold">{ cogncoinsAmount }</span>
            <img src={Cogncoin} className="size-16 md:size-32 absolute left-14 md:left-28" alt="Ilustração da Cogncoin, uma moeda do jogo" />
          </div>

          <div />

          <div className="w-28 md:w-52 h-10 flex justify-center items-center bg-lime-900 rounded-xl">
            <span className="text-white font-bold text-xl">{`${timer}seg`}</span>
          </div>
        </div>
      </section>

      {
        canStartGame ? 
        <>
          <section className="h-96 w-full flex flex-col justify-evenly">
            <h1 className="text-xl md:text-2xl font-bold text-white text-center">
              { questions[index].question } 
            </h1>

            <div className="w-full md:mx-auto flex flex-col gap-2 md:grid md:grid-cols-1 lg:grid-cols-2 md:justify-items-center md:items-center md:justify-center md:mt-7 md:gap-5">
              {
                questions[index].answers.map((answer, index) => (
                  <QuestionOption
                    className={`${wasAnswered ? 'cursor-none' : 'cursor-pointer'}`}
                    key={answer.answerId} 
                    onClick={() => {
                      handleAnswer(answer.isCorrect, answer.answerId)
                    }}
                    question={answer.text} 
                    wasAnswered={wasAnswered}
                    order={getOrderLetter(index)}
                    backgroundColor={ selectedAnswerId === answer.answerId ? (answer.isCorrect ? 'bg-lime-900' : 'bg-red-500') : 'bg-white' }
                  />
                ))
              }
            </div>
          </section>

          <section className="w-full flex justify-between">
            <QuestionButton title="Desistir" />
            <QuestionButton 
              title="Próxima" 
              onClick={ handleChangeQuestion }
            />
          </section>
        </>
        :
        <section className="flex-1 w-full flex justify-center items-center">
          <QuestionButton title="Começar" onClick={ handleStartGame } />
        </section>     
      }
    </div>
  );
}