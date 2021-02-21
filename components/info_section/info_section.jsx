import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Escolha seu champz', 'Invista na carreira', 'Adquira benefícios'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Conheça todos os atletas da Champz e escolha seu campeão';
    case 1:
      return 'Acelere a carreira do seu atleta e contribua para que ele chegue ao topo com pequeno investimento mensal';
    case 2:
      return 'Adquira benefícios';
    default:
      return 'Unknown stepIndex';
  }
}

export default function InfoSection() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }; 

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} id="info_section">
      <Typography variant="h4" component="h4" align="center">Entenda o processo</Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justify = "center">
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Agora é só esperar e acompanhar o crescimento do seu Champz</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
            <Grid container justify = "center">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Voltar
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Fim' : 'Próximo'}
              </Button>
            </Grid>
            </div>
          </div>
        )}
      </div>
      </Grid>
    </div>
  );
}
