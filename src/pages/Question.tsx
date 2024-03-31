import Heart from "../assets/heart.png";
import Cogncoin from "../assets/cogncoin.png";
import { QuestionOption } from "../components/QuestionOption";
import { useState } from "react";
import { QuestionButton } from "../components/QuestionButton";
import { questions } from "../constants/questions";

export function Question() {
  const [index, setIndex] = useState(0);
  const [idCorrect, setIdCorrect] = useState('');
  const [selectedAnswerId, setSelectedAnswerId] = useState('');

  function getOrderLetter(index: number) {
    const letters = ['A', 'B', 'C', 'D'];
    return letters[index];
  }

  function handleAnswer(isCorrect: boolean, id: string) {
    setSelectedAnswerId(id);
    if (isCorrect) {
      setIdCorrect(id);
    } else {
      setIdCorrect('');
    }
  }

  return (
    <div className="p-2 md:p-0 my-0 mx-auto h-full w-full md:h-3/4 md:w-3/4 flex flex-col justify-between items-center">
      <section className="w-full flex items-center justify-between">
        <div className="bg-yellow-600 size-28 rounded-full flex justify-center items-center">
          <span className="text-7xl font-bold text-white">{ index + 1 }</span>
        </div>

        <div className="grid grid-cols-2 items-center gap-8">
          <div className="flex">
            <img className="size-12" src={Heart} alt="Ilustração de um coração vermelho que representa uma vida" />
            <img className="size-12" src={Heart} />
            <img className="size-12" src={Heart} />
          </div>

          <div className="bg-white h-14 rounded-xl flex justify-center items-center relative">
            <span className="text-3xl text-lime-900 font-bold">3</span>
            <img src={Cogncoin} className="size-32 absolute left-28" alt="Ilustração da Cogncoin, uma moeda do jogo" />
          </div>

          <div />

          <div className="w-52 h-10 flex justify-center items-center bg-lime-900 rounded-xl">
            <span className="text-white font-bold text-xl">30seg</span>
          </div>
        </div>
      </section>

      <section className="h-96 w-full flex flex-col justify-evenly">
        <h1 className="text-2xl font-bold text-white text-center">
          { questions[index].question } 
        </h1>

        <div className="w-full mx-auto grid grid-cols-2 justify-items-center items-center justify-center mt-7 gap-5">
          {
            questions[index].answers.map((answer, index) => (
              <QuestionOption
                key={answer.answerId} 
                onClick={() => {
                  handleAnswer(answer.isCorrect, answer.answerId)
                }}
                question={answer.text} 
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
          onClick={() => { setIndex(prev => prev + 1) }}
        />
      </section>
    </div>
  );
}