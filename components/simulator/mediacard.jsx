import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 250,
  },
});

const name_info = {
  "Atleta01": {
    "description": "Boxe..."
  },
  "Atleta02": {
    "description": "Jiu..."
  },
  "Atleta03": {
    "description": "Muay Thai..."
  },
  "Atleta04": {
    "description": "Judô..."
  },
  "Atleta05": {
    "description": "Karatê..."
  },
}

const MediaCard = (props) => {
  const classes = useStyles();
  const name = props.name;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"/" + name + ".png"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { name_info[name].description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Saiba mais
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
