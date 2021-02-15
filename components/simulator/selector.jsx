import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Atleta</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"Atleta01"}>Atleta01</MenuItem>
          <MenuItem value={"Atleta02"}>Atleta02</MenuItem>
          <MenuItem value={"Atleta03"}>Atleta03</MenuItem>
          <MenuItem value={"Atleta04"}>Atleta04</MenuItem>
          <MenuItem value={"Atleta05"}>Atleta05</MenuItem>
        </Select>
        <FormHelperText>Escolha seu atleta</FormHelperText>
      </FormControl>
    </div>
  );
}
