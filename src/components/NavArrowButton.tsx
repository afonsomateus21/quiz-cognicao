import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface NavArrowButtonProps extends LinkProps {
  color: string;
  children: ReactNode
}

export function NavArrowButton({ color, children, ...rest }: NavArrowButtonProps) {
  return (
    <Link 
      {...rest}
      className={`size-14 md:size-20 ${color} rounded-full flex justify-center items-center absolute top-10 left-3 md:top-24 md:left-0`}>
      {children}
    </Link>
  );
}