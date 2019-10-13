import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2,2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  image:{
    margin: theme.spacing(3),
  }
}));

export default function MovieDetails(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <Typography variant="h4" component="p">{props.Title}</Typography>
              
              <img src={props.Poster} className={classes.image} />
          </Paper>
        </Grid>
        <Grid item xs={6}> */}
          <Paper className={classes.paper}>
                <Typography variant="h4" component="p">{props.Title}</Typography>
                <img src={props.Poster} alt={props.Actors} className={classes.image} />
                <Typography variant="h5" component="h3">Actors </Typography>
                <Typography component="p">{props.Actors}</Typography>
                <Divider />
                <Typography variant="h5" component="h3">Genre </Typography>
                <Typography component="p">{props.Genre}</Typography>
                <Divider />
                <Typography variant="h5" component="h3">Language </Typography>
                <Typography component="p">{props.Language}</Typography>
                <Divider />
                <Typography variant="h5" component="h3">Year </Typography>
                <Typography component="p">{props.Year}</Typography>
                <Divider />
                <Typography variant="h5" component="h3">Awards </Typography>
                <Typography component="p">{props.Awards}</Typography>
                <Divider />
                <Typography variant="h5" component="h3">BoxOffice </Typography>
                <Typography component="p">{props.BoxOffice}</Typography>
                <Divider />
                <Typography variant="h5" component="h3">Runtime </Typography>
                <Typography component="p">{props.Runtime}</Typography>
                <Divider />
                <Typography variant="h5" component="h3">Plot </Typography>
                <Typography component="p">{props.Plot}</Typography>
          </Paper>
        {/* </Grid>
        </Grid> */}
      </div>
  );
}