import React, { Fragment } from 'react';
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
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 500
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0)
];

function DataTable(props) {
  const { classes } = props;

  const { title } = props;

  return (
    <div>
      <Typography
        color="textPrimary"
        variant="display1"
        style={{
          display: 'inline-block',
          marginBottom: 0,
          marginTop: '32px',
          marginRight: '16px'
        }}>
        {title}
      </Typography>
      <Button
        variant="fab"
        color="primary"
        mini
        aria-label="Add"
        className={classes.button}>
        <AddIcon />
      </Button>

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell numeric>Title</TableCell>
              <TableCell numeric>Years</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.calories}</TableCell>
                  <TableCell numeric>{row.fat}</TableCell>
                  {/* <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell> */}
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
