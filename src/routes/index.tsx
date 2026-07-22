import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./auth-routes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

import { Loading } from "../components/Loading";

const isLoading = false

export function Routes() {
    if(isLoading) {
        return <Loading />
    }

    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}