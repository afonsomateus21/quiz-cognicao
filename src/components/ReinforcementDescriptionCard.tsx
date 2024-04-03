import { ReactNode } from "react"

interface ReinforcementeDescriptionCardProps {
  color: string;
  title: string;
  text: string;
  children: ReactNode;
}

export function ReinforcementDescriptionCard({ color, title, text, children } : ReinforcementeDescriptionCardProps) {
  return (
    <section className={`${color} w-[90%] md:w-full h-96 md:h-64 lg:h-56 p-4 rounded-3xl relative`}>
      <h1 className="text-white text-3xl font-bold">{ title }</h1>
      <p className="text-white text-justify">{ text }</p>
      <div className="absolute right-2 bottom-2">
        { children }
      </div>
    </section>
  );
}