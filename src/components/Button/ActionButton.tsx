import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ActionButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ActionButton = ({ className, children, ...props }: ActionButtonProps): ReactNode => {
    return (
    <button className={twMerge('px-2 py-1 rounded-md border border-zinc-400/50 hover:border-zinc-600/50 transition-colors duration-100', className)}{...props}>
        {children}
    </button>
    )
}