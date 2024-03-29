import { ActionButton } from "../components/ActionButton";
import { BookUser, Play, SearchSlash } from 'lucide-react';

export function Home() {
  return (
    <div className="p-2 md:p-0 my-0 mx-auto h-full w-full md:h-3/4 md:w-3/4 flex flex-col justify-between items-center">
      <h1 className="font-roboto font-bold text-3xl md:text-5xl text-center text-white">Behaviorismo?</h1>
      
      <div className="w-full lg:w-4/5 flex flex-col md:flex-row md:justify-evenly gap-2 md:gap-0">
        <ActionButton 
          title="Estude aqui" 
          icon={ <Play color="white" /> } 
        />

        <ActionButton 
          title="Sobre" 
          icon={ <SearchSlash color="white" /> } 
        />

        <ActionButton 
          title="Créditos" 
          icon={ <BookUser color="white" /> } 
        />
      </div>
    </div>
  );
}