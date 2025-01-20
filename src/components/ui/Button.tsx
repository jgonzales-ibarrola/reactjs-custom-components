import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface IFButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({children, className, ...props} : IFButtonProps) => {
  return (
    <button {...props} className={twMerge("py-1 px-6 border border-slate-900", className)}>{children}</button>
  )
}

export default Button