import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  showModalEdit,
  delRec,
  updateRec,
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

class ModalEdit extends Component {
  render() {
    const {
      id,
      name,
      phone,
      classes
    } = this.props;
    return (
        <form className={classes.root}>
          <Typography>
            Edit code for {name}
          </Typography>
            <FormGroup>
                  <TextField
                    label='NAME'
                    type="text"
                    className={classes.textField}
                    value={name}
                    onChange = {(e) => this.props.onchangename(e.target.value)}
                  />
                  <TextField
                    label='number'
                    type="text"
                    className={classes.textField}
                    value={phone}
                    onChange = {(e) => this.props.onchangephone(e.target.value)}
                  />
            </FormGroup>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      this.props.showModalEdit(false, '');
                    }}
                    variant="contained"
                  >
                    Close
                  </Button>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      this.props.delete(id);
                      this.props.showModalEdit(false, '');
                    }}
                    variant="contained" color="secondary"
                  >
                    Delete
                  </Button>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      this.props.update(this.props);
                      this.props.showModalEdit(false, '');
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
    id:   state.id,
    name: state.name,
    phone:  state.phone,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModalEdit: bindActionCreators(showModalEdit, dispatch),
    delete: bindActionCreators(delRec, dispatch),
    update: bindActionCreators(updateRec, dispatch),
    onchangename: bindActionCreators(changename, dispatch),
    onchangephone:  bindActionCreators(changephone, dispatch),
  };
};

// style classes
ModalEdit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ModalEdit));
