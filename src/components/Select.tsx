type Props = React.ComponentProps<"select"> & {
    legend?: string
}

export function Select({ legend, children, ...rest }: Props) {
    return (
        <fieldset className="flex min-w-0 flex-1 text-gray-200 focus-within:text-green-100">
            {legend && 
            <legend className="uppercase text-xxs mb-2 text-inherit">
                {legend}
            </legend>
            }

            <select 
                className="h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-100 outline-none placeholder-gray-300 focus:border-2 focus:border-green-100"
                {...rest} 
            >
                <option value="" disabled hidden>
                    Selecione
                </option>

                {children}
            </select>
        </fieldset>
    )
}