import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Escolha seu perfil</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="success"
                tabs={[
                  {
                    tabName: "Investidor",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Você está disposto a impulsionar a carreira de atletas,
                        fazendo ótimos negócios com isso. É um estrategista nato,
                        que possui um olhar de negócios diferenciado para as oportunidades.
                        Escolha seu Champz, tenha possibilidade de altos rendimentos e acompanhe
                        de perto a evolução do seu atleta
                      </p>
                    )
                  },
                ]}
              />
              <GridContainer justify="center">
                <Link href="/components" as="/components">
                  <Button color="success">Entrar</Button>
                </Link>
              </GridContainer>
              <br></br>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="info"
                tabs={[
                  {
                    tabName: "Atleta",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Você é um atleta de alto rendimento que tem vondade de crescer
                        e evoluir cada vez mais. Para isso, precisa daquela ajuda financeira
                        que com certeza é fundamental para impulsionar a sua carreira. Cadastre-se
                        agora mesmo e alcance o seu potencial de campeão
                      </p>
                    )
                  },
                ]}
              />
              <GridContainer justify="center">
                <Link href="/components" as="/components">
                  <Button color="info">Entrar</Button>
                </Link>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
