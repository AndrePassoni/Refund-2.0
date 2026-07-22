import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
    isNotAllowed?: boolean
    variant?: "base" | "icon" | "iconSmall"
}

const variants = {
    button: {
        base: "h-12",
        icon: "h-12 w-12",
        iconSmall: "h-8 w-8",
    }
}

export function Button({ children, isLoading, isNotAllowed ,className, type = "button", variant = "base",...rest }: Props) {
    return (
        <button 
            type={type} 
            disabled={isLoading} 
            className={
                classMerge(["flex items-center justify-center rounded-lg bg-green-100 text-white cursor-pointer transition-colors ease-linear hover:bg-green-200 disabled:opacity-50",
                variants.button[variant],
                isLoading && "cursor-progress",
                isNotAllowed && "cursor-not-allowed",
                className
                ])}
            {...rest}
        >
            {children}
        </button>
    )
}