import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increment, decrement,amountAdded } from './features/counter/counterSlice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <h4>Counter = {count}</h4>
          <button style={{ height: 50, width: 50, margin: 10 }} type="button" onClick={() => dispatch(increment())} >
            +
          </button>
          <button style={{ height: 50, width: 50 }} type="button" onClick={() => dispatch(decrement())} >
            -
          </button>

        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <input style={{ height: 44 }} placeholder="Enter Amount" onChange={e => {
            setAmount(e.target.value)
          }} />
          <button style={{ height: 50 }} type="button" onClick={() => dispatch(amountAdded(Number(amount)))} >
            ADD
          </button>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
