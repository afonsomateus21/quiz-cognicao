import { Link } from "react-router-dom";

interface CustomButtonProps {
  title: string;
  to: string;
  color: string;
}

export function CustomLink({ title, to, color } : CustomButtonProps) {
  return (
    <Link 
      to={ to }
      className={`${color} w-48 h-10 rounded-full flex justify-center items-center`}
    >
      <span className="font-bold text-white">{ title }</span>
    </Link>
  );
}