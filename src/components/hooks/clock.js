import React, { useState, useEffect } from 'react'
import { ProgressPlugin } from 'webpack';

export default function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date)

   

    useEffect(() => {
        setInterval(() => setCurrentTime({date: new Date}), 1000);

    }, []);

    return (
        <div className='clock-wrapper'>
           <h3>{Usestate("currentTime")}</h3>
        </div>

    );
}