import React, {useState} from "react";
import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function SectionForms(props) {
  const classes = useStyles();
  const user_type = props.user_type;
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xoqpzdwv",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Obrigado!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  if (user_type === "investor") {
    return (
      <div className={classes.section} id="forms_section">
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Quero participar</h2>
            <h4 className={classes.description}>
              Preencha as informações abaixo
            </h4>
            <form onSubmit={handleOnSubmit}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Seu Nome"
                    id="name"
                    name="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Seu Email"
                    id="email"
                    name="email"
                    type="email" 
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Fale Conosco"
                  id="message"
                  name="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                    <Button 
                    color="primary"
                    type="submit" 
                    disabled={serverState.submitting}
                    >
                      Enviar
                    </Button>
                    {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                      {serverState.status.msg}
                    </p>
                    )}
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  } else {
    return (
      <div className={classes.section} id="forms_section">
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Quero participar</h2>
            <h4 className={classes.description}>
            Preencha as informações abaixo
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Seu Nome"
                      id="name"
                      name="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Seu Email"
                      id="email"
                      name="email"
                      type="email" 
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Idade"
                      id="age"
                      name="age"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Tempo de treino"
                      id="train_xp"
                      name="train_xp"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Faixa"
                      id="faixa"
                      name="faixa"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Equipe"
                      id="team"
                      name="team"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                    <Button 
                    color="primary"
                    type="submit" 
                    disabled={serverState.submitting}
                    >
                      Enviar
                    </Button>
                    {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                      {serverState.status.msg}
                    </p>
                    )}
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
