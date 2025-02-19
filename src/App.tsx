import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VendasGlobalEspecificaProvider } from "./components/global/context-venda-especifica/VendasGlobalEspecifica";
import { VendasGlobalContextProvider } from "./components/global/context-vendas/VendasGlobalContext";
import { InputGlobalContextProvider } from "./components/global/input/InputGlobalContext";
import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Resumo from "./pages/resumo";
import Vendas from "./pages/vendas";
import Venda from "./pages/venda";
import { VendasByIdGlobalContextProvider } from "./components/global/context-venda-by-id/VendasByIdGlobalContext";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <VendasGlobalContextProvider>
          <InputGlobalContextProvider>
            <VendasGlobalEspecificaProvider>
              <VendasByIdGlobalContextProvider>
                <div className="flex">
                  <Sidenav />
                  <main className="w-full ml-[285px]">
                    <Header />
                    <Routes>
                      <Route path="/" element={<Resumo />} />
                      <Route path="/vendas" element={<Vendas />} />
                      <Route path="/vendas/:id" element={<Venda />} />
                    </Routes>
                  </main>
                </div>
              </VendasByIdGlobalContextProvider>
            </VendasGlobalEspecificaProvider>
          </InputGlobalContextProvider>
        </VendasGlobalContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;