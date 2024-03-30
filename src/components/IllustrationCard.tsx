interface IllustrationCardProps {
  image: string;
}

export function IllustrationCard({ image }: IllustrationCardProps) {
  return (
    <div className="hidden md:h-96 w-72 rounded-3xl bg-amber-600 md:flex flex-col items-center justify-center">
      <img 
        src={image} 
        alt="Imagem do contorno de um cérebro colorido" 
        className="w-20 h-20  md:w-64 md:h-72"
      />
    </div>
  );
}