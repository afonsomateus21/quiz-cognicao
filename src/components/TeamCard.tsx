interface TeamCardProps {
  name: string;
  url: string;
}

export function TeamCard({ name, url } : TeamCardProps) {
  return (
    <div className="w-full flex justify-center items-center gap-3">
      <div 
        className="size-24 bg-cover bg-center rounded-full bg-white" 
        style={{ backgroundImage: `url(${ url })` }} 
      />
      
      <div className="flex-1">
        <span className="text-lime-900 font-bold text-xl">
          { name }
        </span>
      </div>
    </div>
  );
}