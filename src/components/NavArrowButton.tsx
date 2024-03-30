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
      className={`size-14 md:size-20 ${color} rounded-full flex justify-center items-center`}>
      {children}
    </Link>
  );
}