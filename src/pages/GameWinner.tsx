import HappyBrain from "../assets/happy-brain.png";
import CognCoin from "../assets/cogncoin.png";
import { CustomLink } from "../components/CustomLink";
import { usePlayer } from "../hooks/usePlayer";

export function GameWinner() {
  const { cogncoinsAmount, playerLives } = usePlayer();

  return (
    <main className="bg-lime-900 h-screen flex flex-col justify-center">
      <div className="p-2 md:p-6 lg:p-2 my-0 mx-auto h-full w-full md:h-3/4 lg:w-3/4 flex flex-col md:flex-row justify-evenly items-center">
        <div className="bg-orange-600 px-3 rounded-3xl">
          <img 
            className="h-64 w-44 md:h-96 md:w-64 lg:h-[500px] lg:w-[300px]" 
            src={ HappyBrain } alt="Ilustração do cérebro com cara de tristeza" 
          />
        </div>
        
        <div className="flex flex-col h-full justify-evenly items-center md:items-end">
          <CustomLink color="bg-yellow-600" title="Início" to="/" />

          <div>
            <h1 className="font-bold text-xl md:text-7xl text-center md:text-right text-white">Obrigada,<br/> cognauta!</h1>

            <p className="text-sm md:text-xl text-white text-center md:text-right mt-4">
              Você me deixou feliz<br/> <strong>completando o quiz!!!</strong>
            </p>
          </div>

          <div className="w-80 h-16 md:h-20 bg-orange-600 rounded-full flex justify-between items-center p-5">
            <span className="text-3xl font-bold text-white">{ cogncoinsAmount } CognCoins</span>
            <img className="size-16 " src={ CognCoin } alt="Ilustração do CognCoin" />
          </div>

          <div className="w-80 h-16 md:h-20 bg-yellow-600 rounded-full flex justify-center items-center p-5">
            {
              playerLives.map((playerLive, index) => (
                <img key={index} className="size-8 md:size-16" src={playerLive} alt="Ilustração de um coração verde que representa uma vida" />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}