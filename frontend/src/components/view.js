import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModalNew, addRec } from '../store/actions';
import Record from './elements';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ModalEdit from './modalEdit';
import ModalNew from './modalNew';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import { CSVLink } from "react-csv";
import { CSVReader } from 'react-papaparse';

const styles = theme => ({
  root: {
  },
  fab: {
    position: 'absolute',
    top: theme.spacing.unit * 70,
    left: theme.spacing.unit * 40,
    zIndex: 999
  },
});

class Records extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleReadCSV = (data) => {
    const ins = data.data.map(data => this.props.addRec({name:data[1],phone:data[2]}));
  }
 
  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  }
 
  handleImportOffer = () => {
    this.fileInput.current.click();
  }

  render() {
    console.log(this.props.records); 
    const { classes } = this.props;
    let Items = this.props.records.map(record => (
      <Record key={record.id} record={record} />
    ));
    return (
      <Paper className={classes.root}>
        <Fab color="primary" aria-label="Add" 
        className={classes.fab} 
        onClick={() => {this.props.showModalNew(true);}}>
          <AddIcon />
        </Fab>
        <Button variant="contained" color="primary" className={classes.button}>
        <CSVLink 
          style={{textDecoration: 'none', color: 'white'}}
          data={this.props.records}
          filename={"phonebook.csv"}
          className="btn btn-primary">
          Download File
        </CSVLink>
        </Button>
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{display: 'none'}}
          onError={this.handleOnError}
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleImportOffer}>Import</Button>
        <Dialog open={this.props.showModalEditState}>
          <ModalEdit />
        </Dialog>
        <Dialog open={this.props.showModalNewState}>
          <ModalNew />
        </Dialog>    
          {Items}
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    records: state.records,
    showModalEditState: state.showModalEditState,
    showModalNewState: state.showModalNewState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModalNew: state => dispatch(showModalNew(state)),
    addRec: state => dispatch(addRec(state))
  };
};

// style classes
Records.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Records));
