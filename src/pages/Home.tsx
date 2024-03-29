import { ActionButton } from "../components/ActionButton";
import { BookUser, Play, SearchSlash } from 'lucide-react';

export function Home() {
  return (
    <main className="bg-orange-600 h-screen flex flex-col justify-center">
      <div className="my-0 mx-auto h-3/4 w-3/4 bg-blue-500 flex flex-col justify-between items-center">
        <h1 className="font-roboto font-bold text-5xl text-center text-white">Behaviorismo?</h1>
        
        <div className="w-4/5 flex justify-evenly">
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
    </main>
  );
}