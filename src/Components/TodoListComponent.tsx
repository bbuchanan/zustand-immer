import {
  IconButton, Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
import useStore from "../store/todos";
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
  const { removeTodo } = useStore();

  const handleDelete = (Id: number): void => {
    removeTodo(Id);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Complete?</TableCell>
            <TableCell>Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todos.map(t => (
            <TableRow>
              <TableCell component="th" scope="row">
                {t.Title}
              </TableCell>
              <TableCell>{t.IsComplete ? "Yes" : "No"}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(t.Id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoListComponent;
