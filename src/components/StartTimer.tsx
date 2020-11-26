function StartTimer(timeInSeconds: number):Array<number|string>{
    const hours:number = Math.floor(timeInSeconds / 60);
      const minutes:number = Math.floor((timeInSeconds-(hours*3600))/60);
    const seconds:number = timeInSeconds - (hours*3600)-(minutes*60);
    let hoursFormat = hours<10?`0${hours}`: hours;
    let minutesFormat = minutes<10?`0${minutes}`: minutes;
    let secondsFormat = seconds<10?`0${seconds}`: seconds;
    return[
        hoursFormat,
        minutesFormat,
        secondsFormat
    ]
}
export default StartTimer;