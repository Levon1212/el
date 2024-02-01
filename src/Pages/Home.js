import React from 'react';
import {Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import './style.scss';
import Card from "../Components/Card/Card";
import levon from '../asseets/img/users/levon.jpg';
import emil from '../asseets/img/users/emil.jpeg';
import vs from '../asseets/img/vs.png';
const Home = () => {
    return (
        <Container>
            <Box display='flex' justifyContent={"space-evenly"} gap={4}>
                <Card photo={levon} name='Levon Sargsyan' status='champion' wins={10}/>
                <img src={vs} className='vs'/>
                <Card photo={emil} name='Emil Hakobyan' status='looser' wins={3}/>
            </Box>
            <TableContainer >
                <Table sx={{ minWidth: 650, background:'linear-gradient(to right, #2b5876 0%, #4e4376  51%, #2b5876  100%)'}}
                       aria-label="simple table ">
                    <TableHead>
                        <TableRow sx={{backgroundColor:'#000','& th':{color:'#fff'}}}>
                            <TableCell align='left'>Match Date</TableCell>
                            <TableCell align="left">Levon Goals</TableCell>
                            <TableCell align="left">Emil Goals</TableCell>
                            <TableCell align="left">Levon Win</TableCell>
                            <TableCell align="left">Emil Win</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 },'& td':{color:'#fff'} }}>
                                <TableCell align='left'>01.02.2024 16:44</TableCell>
                                <TableCell align="left">10</TableCell>
                                <TableCell align="left">0</TableCell>
                                <TableCell align="left">
                                    <CheckCircleIcon sx={{color:'#25ff00'}}/>
                                </TableCell>
                                <TableCell align="left">
                                    <DoNotDisturbOnIcon sx={{color:'#e00b0b'}}/>
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 },'& td':{color:'#fff'} }}>
                                <TableCell align='left'>01.02.2024 16:44</TableCell>
                                <TableCell align="left">10</TableCell>
                                <TableCell align="left">0</TableCell>
                                <TableCell align="left">
                                    <CheckCircleIcon sx={{color:'#25ff00'}}/>
                                </TableCell>
                                <TableCell align="left">
                                    <DoNotDisturbOnIcon sx={{color:'#e00b0b'}}/>
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 },'& td':{color:'#fff'} }}>
                                <TableCell align='left'>01.02.2024 16:44</TableCell>
                                <TableCell align="left">10</TableCell>
                                <TableCell align="left">0</TableCell>
                                <TableCell align="left">
                                    <CheckCircleIcon sx={{color:'#25ff00'}}/>
                                </TableCell>
                                <TableCell align="left" >
                                    <DoNotDisturbOnIcon sx={{color:'#e00b0b'}}/>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Home;