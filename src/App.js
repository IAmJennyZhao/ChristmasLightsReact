import { ReactComponent as Light } from './lightbulb.svg';
import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import './App.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function App() {
  const [colors, setColor] = useState(['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff']);

  // speed domain 0-100 => updateTime range 1000-100
  const [speed, setSpeed] = useState(30);
  const handleSpeedChange = (event, newSpeed) => {
    setSpeed(newSpeed);
  };

  const [theme, setTheme] = useState('');
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // change of lights
      let newColors = [...colors]
      newColors.unshift(newColors.pop());
      setColor(newColors);

      // interval of change
    }, 1000 - 9 * speed);

    return () => clearInterval(interval);
  }, [speed, colors]);

  var lights = colors.slice(0, 9).map((e, i) => <Light fill={e} key={`light${i}`} className='lightbulb' />)

  return (
    <div className="App">      
      <div>
        {lights}
      </div>
      <div>
        {lights}
      </div>
      
      <div className="Settings">
        <SpeedControls speed={speed} handleSpeedChange={handleSpeedChange} />
        <ThemeSettings theme={theme} handleThemeChange={handleThemeChange} />
      </div>
    </div>
  );
}

function SpeedControls({ speed, handleSpeedChange }) {

  return (
    <div className='SpeedControls'>
      <Box sx={{ width: 400 }}>
        <p className='label'>speed</p>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <KeyboardArrowRightIcon className="downIcon" />
          <Slider aria-label="Speed" value={speed} onChange={handleSpeedChange} />
          <KeyboardDoubleArrowRightIcon className="upIcon" />
        </Stack>
      </Box>
    </div>
  )
}

function ThemeSettings({ theme, handleThemeChange }) {

  const themeTexts = ["Rainbow 1", "Christmas", "White", "Red", "Teal", "Purple"];
  const themeMenuItems = themeTexts.map((e, i) => <MenuItem value={i} className="ThemeText">{e}</MenuItem>)

  return (
    <div className='ThemeSettings'>
      <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth className="ThemeText">
          <InputLabel id="demo-simple-select-label" className="ThemeText">Theme</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={theme}
            label="Theme"
            onChange={handleThemeChange}
            className="ThemeText"
          >
            {themeMenuItems}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
