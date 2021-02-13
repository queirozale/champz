import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import {
  Button,
  Card,
  Typography,
  Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  root: {
    height: 827,
    align: 'center',
    backgroundColor: 'black',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  imgCard: {
    width: '1900',
    height: '840'
  },
  pos: {
    marginBottom: 12,
  },
}));

function SliderFirstSectionHome(props){
  var items = [
    {
      name: "Random Name #1",
      description: "Img 1",
      img: "/Slide1.jpeg",
    },
    {
      name: "Random Name #2",
      description: "Img 2!",
      img: "/Slide2.jpeg",
    },
    {
      name: "Random Name #3",
      description: "Img 3!",
      img: "/Slide3.jpeg",
    },
    {
      name: "Random Name #4",
      description: "Img 4!",
      img: "/Slide4.jpeg",
    },
  ]

  return (
    <div>
      <Carousel>
        {
          items.map( (item, i) => <Item key={i} item={item} /> )
        }
      </Carousel>
    </div>
  )
}


function Item(props){
  const classes = useStyles();

  return (
    <Card>
      <Image
        alt="Mountains"
        src={props.item.img}
        layout="responsive"
        width={1889}
        height={848}
      />
    </Card>
  )
}

export default SliderFirstSectionHome;