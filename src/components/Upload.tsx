import uploadSvg from "../assets/upload.svg"

type Props = React.ComponentProps<"input"> & {
    filename?: string | null
}

export function Upload({ filename = null, ...rest }: Props) {
    return (
        <div>
            <legend className="uppercase text-xxs text-gray-200 mb-2">Comprovante</legend>

            <div className="flex h-12 w-full items-center overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-100 outline-none">
                <input type="file" id="upload" className="hidden" {...rest} />

                <span className="flex-1 truncate px-4 text-xs text-gray-100">
                    {filename ?? "Selecione o arquivo"}
                </span>

                <label htmlFor="upload" className="flex h-full w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 cursor-pointer transition-colors ease-linear hover:bg-green-200">
                    <img src={uploadSvg} alt="Ícone de upload" className="w-6 h-6" />
                </label>
            </div>
        </div>
    )
}