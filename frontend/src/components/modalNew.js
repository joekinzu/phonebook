import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addRec,
  showModalNew,
  changename,
  changephone,
} from '../store/actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';

// styles
const styles = theme => ({
  root: {
    width: '100%',
    margin: theme.spacing.unit * 3
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },

  label: { marginLeft: theme.spacing.unit * 3 },

  button: {
    margin: theme.spacing.unit * 3
  },
  textField: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class modalNew extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root}>
        <Typography>
          Add new record
        </Typography>
        <FormGroup>
            <TextField
              label='Name'
              type="text"
              className={classes.textField}
              onChange = {(e) => this.props.onchangename(e.target.value)}
            />
            <TextField
              label='Number'
              type="text"
              className={classes.textField}
              onChange = {(e) => this.props.onchangephone(e.target.value)}
            />
        </FormGroup>
        <Button
          className={classes.button}
          onClick={() => {
            this.props.showModalNew(false);
          }}
          variant="contained"
        >
          Close
        </Button>
        <Button
          className={classes.button}
          onClick={() => {
            this.props.showModalNew(false);
            this.props.add(this.props);
            console.log('this props', this.props.name);
          }}
          variant="contained" color="primary"
        >
          Save
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModalNewState: state.showModalNewState,
    name: state.name,
    phone:  state.phone,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModalNew: bindActionCreators(showModalNew, dispatch),
    add:   bindActionCreators(addRec, dispatch),
    onchangename: bindActionCreators(changename, dispatch),
    onchangephone:  bindActionCreators(changephone, dispatch),
  };
};

// style classes
modalNew.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(modalNew));
