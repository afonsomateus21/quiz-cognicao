import GreenBrain from "../assets/brain-yellow.png";

export function BookCover() {
  return (
    <div className="h-full w-full select-none touch-none bg-lime-900 flex flex-col justify-evenly items-center">
      <div>
        <h1 className="text-4xl font-lilita text-center text-white">Condicionamento Operante: </h1>

        <h2 className="text-3xl font-lilita text-center text-white">Reforço Positivo<br/> e Negativo</h2>
      </div>

      <img className="w-52 h-52" src={GreenBrain} alt="Ilustração de um cérebro verde" />
    </div>
  );
}