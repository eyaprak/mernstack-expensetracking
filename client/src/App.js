import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import './index.css'
import GlobalState from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalState>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalState>
    </div>
  );
}

export default App;
