import { ButtonHTMLAttributes } from "react";

interface QuestionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function QuestionButton({ title, ...rest } : QuestionButtonProps) {
  return (
    <button 
      {...rest}
      className="w-56 h-16 bg-lime-900 flex justify-center items-center rounded-3xl"
    >
      <span className="text-white font-bold text-xl">{title}</span>
    </button>
  )
}