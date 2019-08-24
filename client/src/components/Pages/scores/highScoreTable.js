import React from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import VideoGrid from "../scores/videoComponents/Video"
import Grid from '@material-ui/core/Grid';



const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


export default class ScoreTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scoreHigh: []
        }
    };
    componentDidMount() {

        this.scoreHigh()

    }

    scoreHigh() {
        axios.get('user/scorehigh').then(response => {

            console.log(response.data.scores);
            this.setState({
                scoreHigh: response.data.scores
            })


        })



    }


    render() {
        return (
            <body>
                <Grid container spacing={1}>
                    <Grid item xs={4}>

                        <div className="tableHighScores">

                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>username&nbsp;</StyledTableCell>
                                        <StyledTableCell> score&nbsp;</StyledTableCell>
                                        <StyledTableCell></StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        <TableRow >
                                            {this.state.scoreHigh.map(user => (
                                    <div>
                                                <TableCell>
                                                    {user.username}


                                                </TableCell>
                                                
                                                <TableCell>
                                                    {user.highScore}


                                                </TableCell>
                                    </div>
                                                  ))}
                                        </TableRow> 


                                </TableBody>
                            </Table>



                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="videoHolder">
                            <VideoGrid />
                        </div>
                    </Grid>
                </Grid>
            </body>
        )
    }
};
