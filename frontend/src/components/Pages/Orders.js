import React, {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from 'axios';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
const [weight, setWeight] = useState("")
const [calories_in, setCalories_in] = useState("")
const [calories_out, setCalories_out] = useState("")
const [heartrate, setHeartrate] = useState("")
const apiUrl = 'http://127.0.0.1:8000/api/8';
axios.get(apiUrl).then((repos) => {
        setWeight(repos.data.weight);
        setCalories_in(repos.data.calories_in);
        setCalories_out(repos.data.calories_out);
        setHeartrate(repos.data.heartrate);
    });

var showdate = new Date();
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>TestUser3</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Calories In</TableCell>
            <TableCell>Calories Out</TableCell>
            <TableCell>Heartrate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>{showdate.getMonth()+1 +'/' +showdate.getDate() + '/' + showdate.getFullYear()}</TableCell>
              <TableCell>{weight}</TableCell>
              <TableCell>{calories_in}</TableCell>
              <TableCell>{calories_out}</TableCell>
              <TableCell>{heartrate}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}