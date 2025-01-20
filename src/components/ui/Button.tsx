import { ButtonHTMLAttributes, ReactNode } from "react"

interface IFButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

const Button = ({children, ...props} : IFButtonProps) => {
  return (
    <button {...props} className="py-1 px-6 border border-slate-900">{children}</button>
  )
}

export default Button