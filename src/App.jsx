import { Header } from "./Components/Header"
import { Balance } from "./Components/Balance"
import { TransactionForm } from "./Components/TransactionForm"
import { TransactionList } from "./Components/TransactionList";
import { GlobalProvider } from "./Context/GlobalState"
import './index.scss';

function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <Balance />
        <TransactionForm />
        <TransactionList />
      </GlobalProvider>
    </>
  )
}

export default App
