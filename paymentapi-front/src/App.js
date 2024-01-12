import {AccountList, UserList, PaymentList} from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AccountList />
        <UserList />
        <PaymentList />
      </header>
    </div>
  );
}

export default App;
