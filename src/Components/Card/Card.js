import React from 'react';
import {Box} from "@mui/material";
import './style.scss';

const Card = ({photo,name,status,wins}) => {
    return (
        <Box>
            <div className="e-card playing">
                <div className="image"> </div>
                <div className="wave"> </div>
                <div className="wave"> </div>
                <div className="wave"> </div>
                <div className="infotop">
                    <img src={photo} className='photo'/>
                    <p className={`status ${status}`}>{status}</p>
                    <p className="name">{name}</p>
                    <p className="wins">Wins: {wins}</p>
                </div>
            </div>
        </Box>
    );
};

export default Card;