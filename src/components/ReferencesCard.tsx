interface ReferencesCardProps {
  url: string;
}

export function ReferencesCard({ url } : ReferencesCardProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <span className="text-center break-all">
        { url }
      </span>
    </div>
  );
}