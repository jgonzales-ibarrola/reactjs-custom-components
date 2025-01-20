import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface IFButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	children: ReactNode;
}

const Button = ({
	children,
	className,
	variant,
	size,
	...props
}: IFButtonProps) => {
	return (
		<button
			{...props}
			className={cn(buttonVariants({ variant, size, className }))}
		>
			{children}
		</button>
	);
};

const buttonVariants = cva("rounded-md text-base py-2 px-6", {
	variants: {
		variant: {
			primary: "bg-slate-900 hover:bg-slate-700 text-white",
			secondary: "bg-gray-200 hover:bg-gray-300 text-slate-900",
			outlined: "bg-none outline outline-1 hover:outline-2 outline-gray-300 hover:outline-gray-400",
			danger: "",
		},
		size: {
			lg: "text-lg py-2 px-8",
			sm: "text-sm py-1 px-4",
		},
		defaultVariants: {
			variant: "primary",
		},
	},
});

export default Button;
