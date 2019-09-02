import React, { Component } from 'react';
import { showModalEdit } from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

// materail ui 
const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.paper,
  },
});


class Record extends Component {
  render() {
    const {
      id,
      name,
      phone,
      showModalEditState
    } = this.props.record;
    const { classes } = this.props;
    return (
      <Paper>
          <List className={classes.root}>
            <ListItem button onClick={() => {this.props.showModalEdit(!showModalEditState, id);}}>
              <ListItemText primary={name+', phone: ' + phone} />
            </ListItem>
          </List >
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModalEditState: state.showModalEditState,
    id:  state.id,
    name: state.name,
    phone:  state.phone,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModalEdit: bindActionCreators(showModalEdit, dispatch)
  };
};

// style classes
Record.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Record));
