import { MainPage } from "../pages/main/ui/MainPage"
import { AppProvider } from "./providers/AppProvider"

export const App = () => {
    return (
        <AppProvider>
            <MainPage />
        </AppProvider>
    )
}