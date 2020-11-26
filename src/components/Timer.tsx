import React,{useState,useEffect} from 'react';
import TimerButton from './TimerButton/TimerButton';
import {Row, Col, Container } from 'react-bootstrap';
import StartTimer from './StartTimer';

const Timer = () => {
    const [timeInSeconds , setTimeInSeconds] = useState<number>(0);
    const [timeArray ,setTimeArray] = useState<Array<number|string>>([]);
    useEffect(() => {
        let timeArray :Array<number|string>=StartTimer(timeInSeconds);
        setTimeArray(timeArray);

    },[timeInSeconds])
    return (
        <div >
            
            <Container>
                <Row >
                    <Col>
            <section className="timer-container  ">
    <p>{timeArray[0]}</p>
                <span>:</span>
    <p>{timeArray[1]}</p>
                <span>:</span>
    <p>{timeArray[2]}</p>
            </section>
            </Col>
            </Row>
            <Row>
                <Col className="py-0 ml-4">
                <TimerButton setTimeInSeconds={setTimeInSeconds}/>
                </Col>
            </Row>
            
            </Container>
            
        </div>
    )
}

export default Timer
