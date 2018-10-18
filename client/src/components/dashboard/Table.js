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
    fontSize: 18,
    color: 'black'
  }
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

export var DataType = {
  Education: 1,
  Experience: 2
};

function DataTable(props) {
  const { classes, data, type, handler } = props;
  return (
    <div>
      <Typography
        color="textPrimary"
        variant="headline"
        style={{
          display: 'inline-block',
          marginBottom: '0',
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
                {type === DataType.Education ? 'School' : 'Company'}
              </CustomTableCell>
              <CustomTableCell>
                {type === DataType.Education
                  ? 'Degree or Course'
                  : 'Title or Position'}
              </CustomTableCell>
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
                  <TableCell>
                    <Button
                      onClick={e => {
                        handler(data[index]._id);
                      }}
                      color="secondary"
                      variant="fab"
                      mini>
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
