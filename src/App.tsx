import { VendasGlobalEspecificaProvider } from "./components/global/context-venda-especifica/VendasGlobalEspecifica";
import { VendasGlobalContextProvider } from "./components/global/context-vendas/VendasGlobalContext";
import { InputGlobalContextProvider } from "./components/global/input/InputGlobalContext";
import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Resumo from "./pages/resumo";

const App = () => {

  return (
    <>
      <VendasGlobalContextProvider>
        <InputGlobalContextProvider>
          <VendasGlobalEspecificaProvider>
            <div>
              <Sidenav />
              <main>
                <Header />
                <Resumo />
              </main>
            </div>
          </VendasGlobalEspecificaProvider>
        </InputGlobalContextProvider>
      </VendasGlobalContextProvider>
    </>
  )
}

export default App;