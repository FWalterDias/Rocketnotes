import { BrowserRouter } from "react-router-dom";
import { AppRouts } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    return (
        <BrowserRouter>
            <AppRouts />
        </BrowserRouter>
    )
}