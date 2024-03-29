interface IllustrationCardProps {
  image: string;
}

export function IllustrationCard({ image }: IllustrationCardProps) {
  return (
    <div className="h-96 w-72 rounded-3xl bg-amber-600 flex flex-col items-center justify-center">
      <img 
        src={image} 
        alt="Imagem do contorno de um cérebro colorido" 
        className="w-64 h-72"
      />
    </div>
  );
}