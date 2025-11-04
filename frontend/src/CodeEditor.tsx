import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

function CodeEditor() {
  return (
    <CodeMirror
      value="print('hello world!')"
      height="100%"
      extensions={[python()]}
      theme="dark"
      style={{ height: '100%', width: '100%', fontSize: '1.2em' }}
    />
  );
}

export default CodeEditor;
