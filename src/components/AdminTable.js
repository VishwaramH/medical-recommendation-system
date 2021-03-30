import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
} from "@material-ui/core";
import axios from "axios";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    overflowY: "scroll",
  },
  textarea: {
    width: 500,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    padding: 10,
    borderRadius: 4,
    "&:focus": {
      outline: "none",
      border: "2px solid #3F51B5",
    },
  },
  modal: {
    backgroundColor: "white",
  },
});

export default function AdminTable() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [feedback, setFeedback] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/app/queries/all")
      .then((response) => {
        setRows(response.data);
        console.log(response.data);
      })
      .catch((error) => alert(error));
  }, []);
  const classes = useStyles();
  const sendEmail = (feedbackData) => {
    axios
      .post("http://localhost:8000/app/email", feedbackData)
      .then((response) => {
        alert(`Email sent successfully to ${feedbackData.email}`);
        window.location.reload();
        setFeedback("");
      })
      .catch((error) => alert(error));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Query</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Feedback</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.email}
              </StyledTableCell>
              <StyledTableCell align="center">{row.query}</StyledTableCell>
              <StyledTableCell align="center">{row.age}</StyledTableCell>
              <StyledTableCell align="center">{row.category}</StyledTableCell>
              <StyledTableCell align="center">
                <div>
                  <Button
                    onClick={handleClickOpen}
                    variant="contained"
                    color="primary"
                  >
                    Send Feedback
                  </Button>
                  <Dialog
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">
                      Enter your feedback
                    </DialogTitle>
                    <DialogContent>
                      <TextareaAutosize
                        aria-label="empty textarea"
                        rowsMin={10}
                        placeholder="Write your feedback here..."
                        className={classes.textarea}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          handleClose();
                          sendEmail({
                            email: row.email,
                            feedback: feedback,
                            query: row.query,
                          });
                        }}
                        color="primary"
                      >
                        Send
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
