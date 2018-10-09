import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const CustomTableCell = withStyles(theme => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    // backgroundColor: theme.palette.grey[400],
    fontSize: 18,
    color: 'black'
  }
  // body: {
  //   fontSize: 20
  // }
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 300
  }
});

let id = 0;
function createData(School, Degree, Years) {
  id += 1;
  return { id, School, Degree, Years };
}

// const rows = [createData('UNB', 'Business of Administration', '1988-1994')];

export var DataType = {
  Education: 1,
  Experience: 2
};

function DataTable(props) {
  const { classes } = props;
  const { data } = props;
  const { type } = props;

  return (
    <div>
      <Typography
        color="textPrimary"
        variant="headline"
        style={{
          display: 'inline-block',
          marginBottom: 0,
          marginTop: '32px',
          marginRight: '16px'
        }}>
        {type === DataType.Education ? 'Education' : 'Experience'}
      </Typography>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>
                {type == DataType.Education ? 'School' : 'Company'}
              </CustomTableCell>
              <CustomTableCell>
                {type == DataType.Education ? 'Degree/Course' : 'Title'}
              </CustomTableCell>
              {/* <CustomTableCell>Years</CustomTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {type === DataType.Education ? row.school : row.company}
                  </TableCell>
                  <TableCell>
                    {type === DataType.Education ? row.degree : row.title}
                  </TableCell>
                  {/* <TableCell>{`${row.to}-${row.to}`}</TableCell> */}
                  <TableCell>
                    <Button color="secondary" variant="fab" mini>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);
