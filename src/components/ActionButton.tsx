import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface ActionButtonProps extends LinkProps {
  title: string;
  icon: ReactNode;
}

export function ActionButton({ title, icon, ...rest }: ActionButtonProps) {
  return (
    <Link 
      {...rest} 
      className="w-full md:w-48 lg:w-56 py-3 px-2 bg-white flex items-center rounded-3xl"
    >
      <div className="bg-lime-900 rounded-full size-8 flex flex-col justify-center items-center mr-2">
        <span>{ icon }</span>
      </div>
      <span className="text-lime-900">{ title }</span>
    </Link>
  );
}