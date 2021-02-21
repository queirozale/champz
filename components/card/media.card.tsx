import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  content: {
    display: 'flex',
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
var contents = [
  {
    img: "https://www.apptuts.net/wp-content/uploads/2020/02/money-bags-3404346_1920-768x768.jpg",
    title: "bolsa-champz",
    description: "Quando você faz parte da Champz, investidores contribuem financeiramente para a evolução da sua carreira no esporte",
  },
  {
    img: "https://abrapetite.com.br/wp-content/uploads/2020/05/beneficios-trabalhistas-obrigat%C3%B3rios-900x540.png",
    title: "Benefícios exclusivos",
    description: "Esteja um passo a frente dos seus adversários! Acompanhe seu crescimento com nossas ferramentas de evolução de treino e indicadores de performance",
  },
  {
    img: "https://image.freepik.com/vetores-gratis/arena-de-ringue-de-boxe-e-holofotes_34982-129.jpg",
    title: "Esteja sob os holofotes",
    description: "Dentro da Champz você é visto! Aqui, o atleta possui um perfil profissional, onde pode mostrar suas conquistas, resultados e progresso para todos",
  },
  {
    img: "https://static.marketing-vendas.pt/wp-content/uploads/2019/10/07092911/Como-consolidar-a-sua-comunidade-online-conteudo.png",
    title: "Comunidade",
    description: "Mais do que uma plataforma, somos uma rede de conexões entre atletas, federações, admiradores do esporte e parceiros da área da saúde, suplementação e material esportivo",
  },
]
  return (
    <div className={classes.content}>
      {
        contents.map((content, i) => <Content key={i} content={content} /> )
      }
      
    </div>
  )
}


function Content(props){
  const classes = useStyles();
  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          alt="Mountains"
          className={classes.media}
          image={props.content.img}
          title="Contemplative Reptile"
          layout="responsive"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {props.content.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

