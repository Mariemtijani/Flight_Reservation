import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { createTheme, ThemeProvider } from '@mui/material/styles';




import dayjs from 'dayjs';

//imported icons 
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { GoArrowSwitch } from "react-icons/go";
import { Link } from 'react-router-dom';

//imported data
import resData from '../Data/ResData';

export default function Reservation() {
  const theme = createTheme({
    palette: {
      inputColor: {
        main: '#40B5AD',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });


  const optionsTrip = [
    { label: 'Return', value: 'Return' },
    { label: 'One way', value: 'One way' },
  ];

  const optionsClasse = [
    { label: 'Economy', value: 'Economy' },
    { label: 'Premuim Economy', value: 'Premuim Economy'},
    { label: 'Business', value: 'Business' },
  ];

 

  const [selectedValue, setSelectedValue] = useState('Return');
  const [classe, setClasse] = useState('');
  const [adults, setAdults] = useState();
  const [child, setChild] = useState();
  const [bag, setBag] = useState();

  const [returnDate, setReturnDate] = useState(null);
  const [formattedReturnDate, setFormattedReturnDate] = useState('no return');

  const [departDate, setDepartDate] = useState(null);
  const [formattedDepartDate, setFormattedDepartDate] = useState('');

  const [cityDepart , setCityDepart] = useState()
  const [cityReturn , setCityReturn] = useState()

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
    const formattedDate = date ? dayjs(date).format('DD MMM') : '';
    setFormattedReturnDate(formattedDate);
  };

  const handleDepartDateChange = (date) => {
   
    setDepartDate(date);
    const formattedDate = date ? dayjs(date).format('DD MMM') : '';
    setFormattedDepartDate(formattedDate);
  }

  const handelSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  };

  const handelSelectedClasse = (e) => {
    setClasse(e.target.value);
  };


  return (
    <div className="containerReservation">
      <div className="rowOne flex">
        <FormControl variant="standard"
         style={{ width: 100 }}
         className='FormControl'>
          <InputLabel>Trip</InputLabel>
          <Select color="info"
          value={selectedValue} onChange={handelSelectedValue}>
            {optionsTrip.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="standard" 
        style={{ width: 100 }}
        className='FormControl'>
          <InputLabel>Class</InputLabel>
          <Select value={classe} onChange={handelSelectedClasse}>
            {optionsClasse.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          variant="standard"
          label="Adults"
          type="number"
          value={(adults)}
          style={{ width: 100 }}
          onChange={(e) => setAdults(e.target.value)}
          className='FormControl'
        />

        <TextField
          variant="standard"
          label="Child"
          type="number"
          value={(child)}
          style={{ width: 100 }}
          onChange={(e) => setChild(e.target.value)}
          className='FormControl'
        />

        <TextField
          variant="standard"
          label="Bags"
          type="number"
          value={bag}
          style={{ width: 100 }}
          onChange={(e) => setBag(e.target.value)}
          className='FormControl'
        />
      </div>

      <div className="rowTwo flex">
        <div className="columnOne">
          <ThemeProvider theme={theme}>
            <Autocomplete
              options={resData}
              getOptionLabel={(res) => res.departCity}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="From?"
                  className="resInput"
                  value={cityDepart}
                  onSelect={(e) => setCityDepart(e.target.value)}
                />
              )}
            />
          </ThemeProvider>
        </div>

          <div className="switchIcon">
          <GoArrowSwitch className = 'icon' style={{color:'#40B5AD'}} /> 
          </div>

        <div className="columnTwo">
          <Autocomplete
            options={resData}
            getOptionLabel={(res) => res.returnCity}
            renderInput={(params) => (
              <TextField {...params} label="To?"
               className="resInput"
               value={cityReturn}
              onSelect={(e) => setCityReturn(e.target.value)} />
            )}
          />
        </div>

         <div className="columnTree">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          label="Depart Date"
          value={departDate}
          onChange={handleDepartDateChange}
          renderInput={(params) => <TextField {...params} className="resInput"/>}
          format="DD MMM"
        />
      </LocalizationProvider>
    </div> 

        <div className="columnFour">
      {selectedValue === 'Return' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MuiDatePicker
            label="Return Date"
            value={returnDate}
            onChange={handleReturnDateChange}
            renderInput={(params) => <TextField {...params} className="resInput" />}
            style={{ display: 'block' }}
            format="DD MMM"
          />
        </LocalizationProvider>
      )}
    </div>

        <div className="columnFive">
          
          
         <Link to={`/result/${selectedValue}/${child}/${adults}/${cityDepart}/${cityReturn}
         /${formattedDepartDate}/${formattedReturnDate}/${classe}/${bag}`}> <Button variant="contained" className="btnRes">
            Search
          </Button></Link>
        </div>
      </div>
    </div>
  );
}
