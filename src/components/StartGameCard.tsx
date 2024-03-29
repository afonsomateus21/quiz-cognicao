import BrainYellow from '../assets/brain-yellow.png';

export function StartGameCard() {
  return (
    <div className="h-96 w-72 rounded-3xl bg-white flex flex-col justify-center">
      <div className="h-4/5 flex flex-col justify-evenly items-center">
        <div className="size-28 bg-lime-900 rounded-full flex justify-center items-center">
          <img 
            src={ BrainYellow } 
            alt='ilustração do contorno de cérebro amarelo' 
            className='size-20'
          />
        </div>

        <div>
          <h2 className="text-center text-3xl font-bold">Quiz</h2>

          <span className="text-orange-600">Ajudar ao CognBrain</span>
        </div>

        <button className="bg-yellow-600 w-48 h-10 rounded-full">
          <span className="text-white font-bold">Começar</span>
        </button>
      </div>
    </div>
  );
}