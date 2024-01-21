import { ReactComponent as Light } from './lightbulb.svg';
import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [colors, setColor] = useState([]);

  if (colors.length == 0) {
    // initialize 
    setColor(['#AA3AAA', '#AA5AAA', '#AA7AAA', '#AA9AAA', '#AAAAAA', '#AACAAA', '#AAEAAA']);
  }

  const lights = colors.map((e, i) => <Light fill={e} className='lightbulb'/>)

  return (
    <div className="App">
      {lights}
    </div>
  );
}

export default App;
