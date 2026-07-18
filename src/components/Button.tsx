type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
}

export function Button({ children, isLoading, type = "button", ...rest }: Props) {
    return (
        <button 
            type={type} 
            disabled={isLoading} 
            className="flex h-12 w-full items-center justify-center rounded-lg bg-green-100 text-white cursor-pointer transition-colors ease-linear hover:bg-green-200 disabled:cursor-not-allowed disabled:opacity-50" 
            {...rest}
        >
            {children}
        </button>
    )
}