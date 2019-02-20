import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Moment from 'moment'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  padding: theme.spacing.unit * 2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
},
  });

function Ticket(props){
const { classes } = props;

  return(

    <div className={classes.root}>
    <style  global jsx>{
    `div{
    background-color: tomato;
    }`
    }</style>


      <Grid container spacing={24}>
        <Grid item xs>
        <Paper className={classes.paper}>
        <h3>{props.location} - {props.names}</h3>
        <h4>{displayTimeOpen(props.timeOpen)}</h4>
        <p><em>{props.issue}</em></p>
        <p>{props.id}</p>
        <hr/>
        </Paper>
        </Grid>

        </Grid>
    </div>
  )
}

function displayTimeOpen(timeOpen){
  return timeOpen.from(new Moment(),true)
}

Ticket.propTypes ={
  classes: PropTypes.object.isRequired,
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
}

export default withStyles(styles)(Ticket);
