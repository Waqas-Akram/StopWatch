import React, { useState } from 'react';
import { clearInterval } from 'timers';
import {Container} from 'react-bootstrap'

type Props = {
    setTimeInSeconds: Function
}

const TimerButton = (props: Props) => {
    const{setTimeInSeconds} = props;
    const [disable , setDisable] = useState<boolean>(false);
    let [intervalId, setIntervalId]=useState<number>(0)
    const Start = ()=>{
        let interval:any =setInterval(()=>{
            setTimeInSeconds((previousTime:number)=>previousTime+1)
        },1000)
        setIntervalId(interval);
        setDisable(true);

    }
    const Pause = ()=>{
        window.clearInterval(intervalId);
        setDisable(false);
    }
    const Reset = ()=>{
        window.clearInterval(intervalId);
        setTimeInSeconds(0);
    }
    return (
        <div >
            <main id="header">
            <Container>
            <button disabled={disable} className="btn btn-warning  btn-get-started"  onClick={Start}>Start</button>
            <button className="btn btn-warning   m-2 btn-get-started" onClick={Pause}>Pause</button>
            <button className="btn btn-warning  m-2 btn-get-started" onClick={Reset}>Reset</button>
            </Container>
            </main>
        </div>
    )
}

export default TimerButton
