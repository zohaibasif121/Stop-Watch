import React,{useState,useEffect} from 'react'

function Timer() {
    const [Timer,setTimer]=useState(0);  
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning,setisRunning]=useState(false);
    

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds
          .toString().padStart(2, '0')}`;
      }
    function handleInput(event){
        setTimer(event.target.value)
    }
    
    function startTimer(){
        setisRunning(true);
        const id = setInterval(() => {
            setTimer((prevState) => prevState - 1);
          }, 1000); 
          setIntervalId(id);
    }
    useEffect(() => {
        if (Timer <= 0) {
            clearInterval(intervalId);
            setTimer(0);
            setisRunning(false);
          }
    }, [Timer,intervalId]);
    
    function handleReset(){
        setisRunning(false);
        setTimer(0);
    }
  return (
    <div className='flex  flex-col items-center gap-10' >
        <div className='mx-10'>
                <input type='number' 
                onChange={handleInput} 
                onClick={()=>{setTimer(0)}}
                disabled={isRunning}
                value={Timer}
                placeholder='Enter Time in sec'
                className={`text-black p-1 bg-[#E0FBE2] h-8 `}
                ></input>
                <button type='submit' onClick={startTimer} disabled={isRunning}
                className={`bg-[#ACE1AF] h-8 ${isRunning? 'opacity-50':'opacity-100'}`}
                >START</button>
          </div>
          
          <div>
                <h1
                className='bg-[#E0FBE2] p-12 rounded-[50%]'
                >{formatTime(Timer)}</h1>
          </div>
        
          <div>
                <button onClick={handleReset}
                className='size-12  bg-[#ACE1AF] rounded w-20 '
                >Reset</button>
            </div>
    </div>
  )
}

export default Timer
