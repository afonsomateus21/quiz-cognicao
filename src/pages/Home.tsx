import { ActionButton } from "../components/ActionButton";
import { Play } from 'lucide-react';

export function Home() {
  return (
    <main className="bg-orange-600 h-screen flex flex-col justify-center">
      <div className="my-0 mx-auto h-3/4 w-3/4">
        <h1 className="font-roboto font-bold text-5xl text-center">Behaviorismo?</h1>
        <ActionButton title="Estude aqui" icon={ <Play color="white" /> } />
      </div>
    </main>
  );
}