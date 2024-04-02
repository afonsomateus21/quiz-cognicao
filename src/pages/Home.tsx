import { ActionButton } from "../components/ActionButton";
import { BookUser, Play, SearchSlash } from 'lucide-react';
import { StartGameCard } from "../components/StartGameCard";
import { IllustrationCard } from "../components/IllustrationCard";
import GrennBrain from "../assets/brain-green.png";
import YellowBrain from "../assets/brain-yellow.png";

export function Home() {
  return (
    <div className="p-2 md:p-0 my-0 mx-auto h-full w-full md:h-3/4 md:w-3/4 flex flex-col justify-between items-center">
      <h1 className="font-roboto font-bold text-3xl md:text-5xl text-center text-white">Behaviorismo?</h1>

      <div className="flex flex-col md:flex-row gap-3 lg:gap-2 md:w-full lg:w-4/5 items-center md:justify-evenly">
        <IllustrationCard image={ YellowBrain } />

        <StartGameCard />

        <IllustrationCard image={ GrennBrain } />
      </div>
      
      <div className="w-full lg:w-4/5 flex flex-col md:flex-row md:justify-evenly gap-2 md:gap-0">
        <ActionButton
          to="/reinforcements"
          title="Estude aqui" 
          icon={ <Play color="white" /> } 
        />

        <ActionButton 
          to="/about"
          title="Sobre" 
          icon={ <SearchSlash color="white" /> } 
        />

        <ActionButton
          to="/creditos" 
          title="Créditos" 
          icon={ <BookUser color="white" /> } 
        />
      </div>
    </div>
  );
}