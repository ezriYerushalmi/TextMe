import React from 'react';
import './TimeStamp.css'

const TimeStamp = ({timeStampString}) => {

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return `${hours}:${minutes} ${ampm}` ;
    }
    
    const date = new Date(timeStampString);
    
    const representationDate = formatAMPM(date)

    return (
        <span className="timestamp">{representationDate}</span>
    );
};

export default TimeStamp;
