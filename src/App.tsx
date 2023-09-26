import { Header } from "./components/1-header";
import { Main } from "./components/2-main";
import { Footer } from "./components/3-footer";

export function App() {
    return (<>
        <div className="min-h-screen bg-green-400 grid grid-rows-[auto,1fr,auto]">
            <Header />
            <Main />
            <Footer />
        </div>
    </>);
}
