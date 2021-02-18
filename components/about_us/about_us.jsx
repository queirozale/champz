import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import AvatarCard from './avatar_card';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root} justify="center" wrap="nowrap"  alignItems="center">
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <AvatarCard partner="carlos" />
          <AvatarCard partner="helton" />
          <AvatarCard partner="arthur" />
      </GridList>
    </div>
  );
}