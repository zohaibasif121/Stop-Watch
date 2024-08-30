import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Animation from './Animation';

function Stopwatch() {
    const [Timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [Record, setRecord] = useState([]);

    function formatTime(milliseconds) {
        // const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const remainingMilliseconds = Math.floor((milliseconds % 1000) / 10); // rounding to nearest hundredth
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${remainingMilliseconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        const newArr = [{ id: uuidv4(), time: Timer }];
        setRecord(newArr);
        setIsRunning(true);
        const id = setInterval(() => {
            setTimer((prevState) => prevState + 10);
        }, 10);
        setIntervalId(id);
    }

    useEffect(() => {
        // if (Timer <= 0) {
        //     clearInterval(intervalId);
        // }
    }, [Timer, intervalId]);

    function Recordtimer() {
        const newArr = [...Record, { id: uuidv4(), time: Timer }];
        setRecord(newArr);
    }

    const RecordList = Record.map((obj) => (
        <Animation
            key={obj.id}
            text={(
                <div>
                    <h2 className='bg-[#ACE1AF] rounded p-1'>
                        {formatTime(obj.time)}
                    </h2>
                </div>
            )}
            direction='down'
        />
    ));

    function StopTimer() {
        clearInterval(intervalId);
        Recordtimer();
        setTimer(0);
        setIsRunning(false);
    }

    return (
        <div className='flex flex-col items-center gap-10'>
            <button type='submit' onClick={startTimer} disabled={isRunning}
                className={`size-12 bg-[#ACE1AF] rounded w-20 ${isRunning ? 'opacity-50' : 'opacity-100'}`}>
                START
            </button>
            <h1 className='bg-[#E0FBE2] p-10 rounded-[50%]'>
                <Animation text={formatTime(Timer)} />
            </h1>
            <div className='space-x-2'>
                <button onClick={Recordtimer} disabled={!isRunning}
                    className={`size-12 bg-[#ACE1AF] rounded w-20 ${!isRunning ? 'opacity-50' : 'opacity-100'}`}>
                    Record
                </button>
                <button onClick={StopTimer} disabled={!isRunning}
                    className={`size-12 bg-[#ACE1AF] rounded w-20 ${!isRunning ? 'opacity-50' : 'opacity-100'}`}>
                    Stop
                </button>
            </div>
            <div className='flex flex-row gap-3 flex-wrap justify-center'>
                {RecordList}
            </div>
        </div>
    );
}

export default Stopwatch;
