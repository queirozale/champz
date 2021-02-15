import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MediaCard from './mediacard';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const atletas_info = {
    "Atleta01": {
        "rentabilidade": 0.08,
        "prazo": 5
    },
    "Atleta02": {
        "rentabilidade": 0.06,
        "prazo": 4
    },
    "Atleta03": {
        "rentabilidade": 0.09,
        "prazo": 6
    },
    "Atleta04": {
        "rentabilidade": 0.07,
        "prazo": 4
    },
    "Atleta05": {
        "rentabilidade": 0.08,
        "prazo": 3
    },
}

function simulation(cotas, atleta) {
    const valor_cota = 1;
    const periodo_investimento = 36;
    const atleta_info = atletas_info[atleta];
    const rentabilidade = atleta_info["rentabilidade"];
    const prazo = atleta_info["prazo"];
    const investimento = cotas * valor_cota * periodo_investimento;
    
    return investimento * (1 + rentabilidade)**(prazo*12)

};

const Simulator = (props) => {
  const classes = useStyles();
  const user_type = props.user_type;
  const [values, setValues] = React.useState({
    cotas: 10,
    atleta: "Atleta01",
  });
  const [retorno, setRetorno] = React.useState(0);

  const handleChange = props => event => {
    setValues({ ...values, [props]: event.target.value });
  };

function formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
};

  if (user_type === "investor"){
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <Grid container justify="center" wrap="nowrap" spacing={5}>
                    <Grid item xs={1} style={{minWidth: 300}}>
                    <MediaCard name= { values.atleta } />
                    </Grid>
                    <Grid item xs={3}>
                    <FormControl>
                    <Box m={2}>
                        <InputLabel id="demo-simple-select-helper-label">Atleta</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        style={{minWidth: 200}}
                        onChange={handleChange('atleta')}
                        >
                        <MenuItem value={"Atleta01"}>Atleta01</MenuItem>
                        <MenuItem value={"Atleta02"}>Atleta02</MenuItem>
                        <MenuItem value={"Atleta03"}>Atleta03</MenuItem>
                        <MenuItem value={"Atleta04"}>Atleta04</MenuItem>
                        <MenuItem value={"Atleta05"}>Atleta05</MenuItem>
                        </Select>
                        <FormHelperText>Escolha seu atleta</FormHelperText>
                    </Box>
                    <Box m={2}>
                        <TextField
                        id="outlined"
                        label="Cotas"
                        defaultValue="15"
                        variant="outlined"
                        value={values.cotas}
                        onChange={handleChange('cotas')}
                        />
                    </Box>
                    <Button variant="contained" color="primary" onClick={() => { setRetorno(simulation(values.cotas, values.atleta)) }}>
                        Simular
                    </Button>
                    </FormControl>
                    </Grid>
                </Grid>
            </div>
            <Grid container justify="center" wrap="nowrap" spacing={5}>
                <h2>{ "Possibilidade de retono: R$ " + formatMoney(retorno) }</h2>
            </Grid>
        </form>
      );      
  } else {
    return (
        <form className={classes.root} noValidate autoComplete="off">
            
            <Typography variant="h3" component="h3" align="center">Projete seus benefícios</Typography>
            <div>
            <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
            <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <TextField
                id="standard-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                readOnly: true,
                }}
            />
            <TextField
                id="standard-number"
                label="Number"
                type="number"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField id="standard-search" label="Search field" type="search" />
            <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
            />
            </div>
            <div>
            <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                variant="filled"
            />
            <TextField
                disabled
                id="filled-disabled"
                label="Disabled"
                defaultValue="Hello World"
                variant="filled"
            />
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            />
            <TextField
                id="filled-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                readOnly: true,
                }}
                variant="filled"
            />
            <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                shrink: true,
                }}
                variant="filled"
            />
            <TextField id="filled-search" label="Search field" type="search" variant="filled" />
            <TextField
                id="filled-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="filled"
            />
            </div>
            <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
                variant="outlined"
            />
            <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
                variant="outlined"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
            />
            <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                readOnly: true,
                }}
                variant="outlined"
            />
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                shrink: true,
                }}
                variant="outlined"
            />
            <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
            <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="outlined"
            />
            </div>
        </form>
      );
  }

};

export default Simulator;
