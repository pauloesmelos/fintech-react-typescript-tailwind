import { VendasGlobalContextProvider } from "./components/global/context-vendas/VendasGlobalContext";
import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Resumo from "./pages/resumo";

const App = () => {

  return (
    <>
      <VendasGlobalContextProvider>
        <div>
          <Sidenav />
          <main>
            <Header />
            <Resumo />
          </main>
        </div>
      </VendasGlobalContextProvider>
    </>
  )
}

export default App;