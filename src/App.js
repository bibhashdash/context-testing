import {useContext} from 'react';
import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';

import CounterContextProvider, {CounterContext} from './Contexts/CounterContext';
function App() {
  const x = useContext(CounterContext);
  return (
    <div className="App">
      <CounterContextProvider value={x}>
      <Header />
      <Counter />
      </CounterContextProvider>
    </div>
  );
}

export default App;
