import { CustomLink } from "../components/CustomLink";
import SeriousBrain from "../assets/serious-brain.png";
import { ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";

export function DecisionContinueOrStudy() {
  return (
    <main className="bg-lime-900 h-screen flex flex-col justify-center">
      <div className="p-2 md:p-0 my-0 mx-auto h-full w-full md:h-3/4 md:w-3/4 flex flex-col justify-center gap-5 items-center relative">
        <h1 className="text-center text-white text-6xl font-roboto font-bold">
          Que tal estudar um<br/> pouco antes de me<br/> ajudar?
        </h1>

        <Link 
          to="/"
          className="size-20 bg-yellow-600 rounded-full flex justify-center items-center absolute top-24 left-0">
          <ArrowLeft color="#394f21" size={60} />
        </Link>

        <div className="flex flex-col gap-3 mt-10">
          <CustomLink to="/question" color="bg-yellow-600" title="Vamos lá!" />
          <CustomLink to="/question" color="bg-orange-600" title="Não, Brain, eu me garanto!" />
        </div>

        <img 
          className="absolute left-56 bottom-0"
          src={SeriousBrain} 
          alt="Ilustração do Brain com o rosto sério" 
        />
      </div>
    </main>
  );
}