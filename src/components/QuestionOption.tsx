import { HTMLAttributes } from "react";

interface QuestionOptionProps extends HTMLAttributes<HTMLDivElement> {
  question: string;
  order: string;
  backgroundColor: string;
}

export function QuestionOption({ question, order, backgroundColor, ...rest } : QuestionOptionProps) {
  return (
    <div {...rest} className={`w-[400px] h-14 ${ backgroundColor } rounded-full flex justify-start gap-3 items-center p-2 cursor-pointer`}>
      <div className="size-10 rounded-full bg-lime-900 flex justify-center items-center">
        <span className="text-lg font-bold text-white">{ order }</span>
      </div>
      <span className={`text-xl font-bold ${backgroundColor === "bg-lime-900" ? "text-white" : "text-lime-900"}`}>
        { question }
      </span>
    </div>
  );
}