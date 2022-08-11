import { useEffect, useState, } from 'react';


export const Timer = (item) => {
    const [timeData, setTimeData] = useState({
        seconds: '',
        minutes: '',
        hours: ''
    })
    let currEndDate = Date.parse(item.timer)
    const [currentEdnTime, setCurrentEndTime] = useState(currEndDate)
    useEffect(() => {
        const intervalId = setInterval(() => {
            let leftTime = 86400000 - (Date.now() - currentEdnTime)
            let seconds = Math.floor(leftTime / 1000)
            let minutes = Math.floor(seconds / 60)
            let hours = Math.floor(minutes / 60)
            minutes = Math.floor(minutes % 60)
            seconds = Math.floor(seconds % 60)
            const time = { seconds, minutes, hours }
            setCurrentEndTime(oldcurrTime => oldcurrTime - 1000)
            setTimeData(time)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [currentEdnTime])
    return timeData
}
