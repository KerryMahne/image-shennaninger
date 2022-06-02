import '../App.css'
import { Button } from '../components/button/button'
import { GlobalTheme } from '../theme/global_theme'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button variant="primary">Click</Button>
      <Button variant="secondary">Click 2</Button>
      <GlobalTheme />
    </div>
  )
}

export default App
