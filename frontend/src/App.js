import React, { Component } from 'react';
import { connect } from 'react-redux';
import Records from './components/view';
import { getRecs } from './store/actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width: '400px',
    height: '600px',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

class App extends Component {
  componentDidMount() {
    this.props.ongetRecs();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Records />
      </div>  
    );
  }
}

const mapStateToProps = state => {
  return {
    records: state.records,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ongetRecs: () => dispatch(getRecs()),
  };
};

// style classes
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
