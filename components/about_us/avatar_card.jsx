import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const AvatarCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const partner = props.partner;

  const partners_info = {
      "carlos": {
          "name": "Carlos Gomes",
          "position": "Diretor de Operações",
          "description": "Atuando há cerca de 10 anos como consultor de empresas, especialmente em gerenciamento de riscos corporativos e melhoria de processos",
          "full_description": {
              "paragraph1": "Atuando há cerca de 10 anos como consultor de empresas, especialmente em gerenciamento de riscos corporativos e melhoria de processos, Carlos foi gerente da Deloitte e da BDO, duas das maiores firmas de consultoria do mundo, nas quais teve a oportunidade de liderar grandes projetos de transformação em clientes como Vale, Bradesco, Petrobras, Eletrobras, Michelin, White Martins, Repsol, Cola-Cola, Grupo Globo, Ipiranga, SulAmérica, L’oreal, entre outras companhias blue ship",
              "paragraph2": "Seus primeiros traços de empreendedor começaram a surgir ainda na adolescência, com a criação e distribuição de um jornal escolar, mas foi em 2018 que seu empreendimento mais consistente e ambicioso começou a sair do papel. Naquele ano, Champz foi residente no programa de pré-aceleração de startups da Telefonica Vivo, mas somente em 2020 Carlos encontrou os sócios e cofundadores que alavancaram o projeto e promoveram seu lançamento em 2021"
          }
      },
      "arthur": {
          "name": "Arthur Ignatowski Barcelos",
          "position": "Diretor Administrativo",
          "description": "Há sete anos no mercado, atuou na gestão de relacionamentos em um e-commerce líder do setor de vinhos",
          "full_description": {
              "paragraph1": "Bacharel e Mestre em Administração pela Universidade Federal do Espírito Santo e apaixonado por esportes. Há sete anos no mercado, atuou na gestão de relacionamentos em um e-commerce líder do setor de vinhos. Após o término do mestrado em 2018 vem se dedicando a carreira acadêmica. Atualmente, é docente em cursos da área de Gestão",
              "paragraph2": "Acredita que a Champz é o principal canal para conectar atletas e entusiastas do esporte, sendo a fórmula perfeita para promover a competição em alto nível no país. Na Champz todos saem ganhando: atletas, federações, audiência e apoiadores do esporte"
          }
      },
      "helton": {
          "name": "Helton Kenji",
          "position": "Diretor de Esportes",
          "description": "Faixa preta e ex-atleta de Jiu-jitsu, Helton se dedicou ao esporte ate o fim faculdade de Engenharia Mecânica (UFES), dando aulas de Jiu-jitsu e participando de competições nacionais e internacionais",
          "full_description": {
              "paragraph1": "Faixa preta e ex-atleta de Jiu-jitsu, Helton se dedicou ao esporte ate o fim faculdade de Engenharia Mecânica (UFES), dando aulas de Jiu-jitsu e participando de competições nacionais e internacionais. Após o término da faculdade, optou por seguir a carreira corporativa, atuando como engenheiro de qualidade na multinacional WEG Motores, trabalhando há cerca de 5 anos com gestão da qualidade e melhoria continua aplicado na fabricação de componentes de motor elétrico",
              "paragraph2": "Helton já empreendeu com academia de jiu-jitsu (2015), lanchonete de frango frito (2017), e em 2020 após algumas conversas com o cofundador Carlos, recebeu a proposta de fazer parte do projeto. Se identificou com o propósito e visualizou na Champz uma grande oportunidade de contribuir para o crescimento do esporte que é a sua paixão, o Jiu-jitsu"
          }
      }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={partner} src={"/" + partner + "_avatar.jpg"} className={classes.large}  />
        }
        title={partners_info[partner].name}
        subheader={partners_info[partner].position}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {partners_info[partner].description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {partners_info[partner].full_description.paragraph1}
          </Typography>
          <Typography paragraph>
          {partners_info[partner].full_description.paragraph2}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AvatarCard;
