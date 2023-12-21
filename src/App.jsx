import { Header } from "./Components/Header"
import { Balance } from "./Components/Balance"
import { TransactionForm } from "./Components/TransactionForm"
import { GlobalProvider } from "./Context/GlobalState"
import './index.scss';

function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <Balance />
        <TransactionForm />
        <h1>App de ingresos y egresos</h1>
      </GlobalProvider>
    </>
  )
}

export default App
