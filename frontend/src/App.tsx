import './App.css'
import CodeEditor from './CodeEditor';

function App() {
  return (
    <div className="container">
      <div className="quadrant" style={{ gridArea: '1 / 1 / 2 / 2' }}>
        Top-Left: Canvas
      </div>
      <div className="quadrant" style={{ gridArea: '1 / 2 / 2 / 3', overflow: 'hidden' }}>
        <CodeEditor />
      </div>
      <div className="quadrant" style={{ gridArea: '2 / 1 / 3 / 2' }}>
        Bottom-Left: Console
      </div>
      <div className="quadrant" style={{ gridArea: '2 / 2 / 3 / 3' }}>
        Bottom-Right: Control Panel
      </div>
    </div>
  )
}

export default App
