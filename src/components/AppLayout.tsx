import { Outlet } from "react-router";
import { Header } from "./Header";

export function AppLayout() {
    return (
        <div className="min-h-screen bg-gray-400 text-gray-100">
            <main className="mx-auto flex w-full max-w-[1180px] flex-col px-8 pt-8 pb-10">
                <Header />
                <Outlet />
            </main>
        </div>
    )
}