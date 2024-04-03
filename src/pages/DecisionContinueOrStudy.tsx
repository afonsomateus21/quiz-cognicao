import { CustomLink } from "../components/CustomLink";
import SeriousBrain from "../assets/serious-brain.png";
import { ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";

export function DecisionContinueOrStudy() {
  return (
    <main className="bg-lime-900 h-screen flex flex-col justify-center items-center">
      <div className="p-2 md:p-6 my-0 mx-auto h-full w-full md:w-3/4 flex flex-col justify-center md:gap-5 items-center relative">
        <h1 className="text-center text-white text-3xl md:text-6xl font-roboto font-bold">
          Que tal estudar um<br/> pouco antes de me<br/> ajudar?
        </h1>

        <Link 
          to="/"
          className="size-14 md:size-20 bg-yellow-600 rounded-full flex justify-center items-center absolute top-4 left-4 md:top-8 md:left-8">
          <ArrowLeft color="#394f21" size={60} />
        </Link>

        <div className="flex flex-col gap-3 mt-10">
          <CustomLink to="/reinforcements" color="bg-yellow-600" title="Vamos lá!" />
          <CustomLink to="/questions" color="bg-orange-600" title="Não, Brain, eu me garanto!" />
        </div>

        <img 
          className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-80 absolute bottom-5 md:bottom-10 lg:left-64 lg:bottom-28"
          src={SeriousBrain} 
          alt="Ilustração do Brain com o rosto sério" 
        />
      </div>
    </main>
  );
}
