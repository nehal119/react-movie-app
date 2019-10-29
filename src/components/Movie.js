import React from 'react';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme =>  ({
  card: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "1.2rem",
    textAlign: "center"
  },
  media: {
    height: 140,
  },
  link: {
    margin: theme.spacing(1),
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.Poster}
          title={props.data.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.data.Year}
        </Button>
        <Button size="small" color="primary">
            <Link to={`/${props.data.imdbID}`} className={classes.link} style={{textDecoration: "none"}}>
                    KNOW MORE
            </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
