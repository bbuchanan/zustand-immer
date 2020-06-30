import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ITodo from "../Types/todo";

interface ITodoListProps {
  todos: Array<ITodo>;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const TodoListComponent: React.FC<ITodoListProps> = props => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Complete?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todos.map(t => (
            <TableRow>
              <TableCell component="th" scope="row">
                {t.Name}
              </TableCell>
              <TableCell>{t.IsComplete ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoListComponent;
