import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund() {
    const [name, setName] = useState("Teste")
    const [amount, setAmount] = useState("34")
    const [category, setCategory] = useState("transport")
    const [isLoading, setIsLoading] = useState(false)
    const [filename, setFilename] = useState<File | null>(null)

    const navigate = useNavigate()
    const params = useParams<{id: string}>()

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        if(params.id) {
            return navigate(-1)
        }

        console.log(name, amount, category, filename)
        navigate("/confirm", { state: { fromSubmit: true } })
    }

    return (
        <form onSubmit={onSubmit} className="mx-auto mt-16 flex w-full max-w-116 flex-col gap-6 rounded-[20px] bg-gray-500 p-10 shadow-[0_8px_32px_rgba(31,37,35,0.06)]">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-100">
                    Solicitação de reembolso
                </h1>
                <p className="text-sm text-gray-200">
                    Dados da despesa para solicitar reembolso.
                </p>
            </header>

            <div className="space-y-6">
                <Input required legend="Nome da solicitação" value={name} onChange={(e) => setName(e.target.value)} disabled={!!params.id} />

                <div className="flex gap-4">
                    <Select required legend="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} disabled={!!params.id}>
                        {
                            CATEGORIES_KEYS.map((category) => (
                                <option key={category} value={category}>
                                    {CATEGORIES[category].name}
                                </option>
                            ))
                        }
                    </Select>
                    <Input required legend="Valor" value={amount} onChange={(e) => setAmount(e.target.value)} disabled={!!params.id} />
                </div>

                <Upload filename={filename && filename.name} onChange={(e) => e.target.files && setFilename(e.target.files[0])} />

                <Button type="submit" variant="base" isLoading={isLoading}>
                    {params.id ? "Voltar" : "Enviar"}
                </Button>
            </div>
        </form>
    )
}