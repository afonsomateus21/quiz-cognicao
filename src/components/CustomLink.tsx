import { Link, LinkProps } from "react-router-dom";

interface CustomButtonProps extends LinkProps {
  title: string;
  to: string;
  color: string;
}

export function CustomLink({ title, to, color, ...rest } : CustomButtonProps) {
  return (
    <Link
      {...rest} 
      to={ to }
      className={`${color} w-60 h-14 rounded-full flex justify-center items-center`}
    >
      <span className="font-bold text-white">{ title }</span>
    </Link>
  );
}