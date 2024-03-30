import { CustomLink } from "../components/CustomLink";
import { ReinforcementeDescriptionCard } from "../components/ReinforcementeDescriptionCard";

export function ReinforcementsDescription() {
  return (
    <main className="bg-yellow-600 h-screen flex flex-col justify-center">
      <div className="bg-blue-300 p-2 md:p-0 my-0 mx-auto h-full w-full md:h-3/4 md:w-3/4 flex flex-col justify-between items-center">
        <div>
          <h1 className="text-3xl text-center text-white font-bold">Reforço 
            <span className="text-lime-900"> positivo </span> 
            ou <span className="text-orange-600">negativo</span>?
          </h1>

          <h2 className="text-xl text-white font-bold">Conceitos presentes no Condicionamento Operante, proposto por B.F. Skinner.</h2>
        </div>

        <ReinforcementeDescriptionCard 
          color="bg-lime-900" 
          children={
            <CustomLink to="/question" color="bg-orange-600" title="Quero saber mais!" />
          } 
        />

        <ReinforcementeDescriptionCard 
          color="bg-orange-600" 
          children={
            <CustomLink to="/question" color="bg-lime-900" title="Quero saber mais!" />
          } 
        />
      </div>
    </main>
  );
}