import { ReactComponent as Light } from './lightbulb.svg';
import { useState, useRef } from 'react';
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
  const [colors, setColor] = useState([]);

  if (colors.length == 0) {
    // initialize 
    setColor(['#AA3AAA', '#AA5AAA', '#AA7AAA', '#AA9AAA', '#AAAAAA', '#AACAAA', '#AAEAAA']);
  }

  const lights = colors.map((e, i) => <Light fill={e} className='lightbulb' />)

  return (
    <div className="App">
      {lights}
      <div className="Settings">
        {SpeedControls()}
        {ThemeSettings()}
      </div>
    </div>
  );
}

function SpeedControls() {
  const [value, setValue] = useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='SpeedControls'>
      <Box sx={{ width: 400 }}>
        <p className='label'>speed</p>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <KeyboardArrowRightIcon className="downIcon" />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <KeyboardDoubleArrowRightIcon className="upIcon" />
        </Stack>
      </Box>
    </div>
  )
}

function ThemeSettings() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='ThemeSettings'>
      <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth className="ThemeText">
          <InputLabel id="demo-simple-select-label" className="ThemeText">Theme</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Theme"
            onChange={handleChange}
            className="ThemeText"
          >
            <MenuItem value={10} className="ThemeText">Theme Type 1</MenuItem>
            <MenuItem value={20} className="ThemeText">Theme Type 2</MenuItem>
            <MenuItem value={30} className="ThemeText">Theme Type 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
