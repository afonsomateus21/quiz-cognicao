import SadBrain from "../assets/sad-brain.png";
import CognCoin from "../assets/cogncoin.png";
import { CustomLink } from "../components/CustomLink";

export function GameOver() {
  return (
    <div className="p-2 md:p-6 lg:p-2 my-0 mx-auto h-full w-full md:h-3/4 lg:w-3/4 flex flex-row justify-evenly items-center">
      <div className="bg-lime-900 px-3 rounded-3xl">
        <img src={ SadBrain } alt="Ilustração do cérebro com cara de tristeza" />
      </div>
      
      <div className="flex flex-col h-full justify-evenly items-end">
        <div>
          <h1 className="font-bold text-7xl text-right text-white">Que tal estudar<br/> mais um pouco?</h1>

          <p className="text-xl text-white text-right mt-4">
            Você perdeu todas as vidas e<br/> me deixou triste!!!
          </p>
        </div>

        <div className="w-80 h-20 bg-lime-900 rounded-full flex justify-between items-center p-5">
          <span className="text-3xl font-bold text-white">0 CognCoins</span>
          <img className="size-16 " src={ CognCoin } alt="Ilustração do CognCoin" />
        </div>

        <div className="w-full flex justify-between">
          <CustomLink color="bg-yellow-600" title="Início" to="/" />
          <CustomLink color="bg-lime-900" title="Estudar..." to="/" />
        </div>
      </div>
    </div>
  )
}