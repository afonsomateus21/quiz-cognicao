interface ReferencesCardProps {
  url: string;
}

export function ReferencesCard({ url } : ReferencesCardProps) {
  return (
    <div className="w-full flex justify-center items-center gap-3">
      <div className="flex-1">
        <span className="text-lime-900 font-bold text-lg">
          { url }
        </span>
      </div>
    </div>
  );
}