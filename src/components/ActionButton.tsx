import { ButtonHTMLAttributes, ReactNode } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: ReactNode;
}

export function ActionButton({ title, icon, ...rest }: ActionButtonProps) {
  return (
    <button 
      {...rest} 
      className="w-56 py-3 px-2 bg-white flex items-center rounded-3xl"
    >
      <div className="bg-lime-900 rounded-full size-8 flex flex-col justify-center items-center mr-2">
        <span>{ icon }</span>
      </div>
      <span>{ title }</span>
    </button>
  );
}