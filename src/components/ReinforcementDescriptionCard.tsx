import { ReactNode } from "react"

interface ReinforcementeDescriptionCardProps {
  color: string;
  children: ReactNode;
}

export function ReinforcementDescriptionCard({ color, children } : ReinforcementeDescriptionCardProps) {
  return (
    <section className={`${color} w-[90%] md:w-full h-96 md:h-64 lg:h-56 p-4 rounded-3xl relative`}>
      <h1 className="text-white text-3xl font-bold">Reforço Positivo</h1>
      <p className="text-white text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="absolute right-2 bottom-2">
        { children }
      </div>
    </section>
  );
}