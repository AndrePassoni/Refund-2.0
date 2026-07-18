import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"

export function Header() {
    return (
        <header className="flex w-full items-center justify-between py-4">
            <img src={logoSvg} alt="Logo" className="h-6 w-auto" />

            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-200">
                    Olá, André
                </span>

                <img src={logoutSvg} alt="Ícone de sair" className="h-6 w-6 cursor-pointer transition ease-linear hover:opacity-75" />
            </div>
        </header>
    )
}