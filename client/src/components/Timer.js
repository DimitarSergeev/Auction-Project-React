import { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

import * as auctionService from '../services/auctionService'
export const Timer = ({ item, styles }) => {
    const [timeData, setTimeData] = useState({
        seconds: '',
        minutes: '',
        hours: ''
    })
    const navigate = useNavigate()


    let currEndDate = Date.parse(item.timer)
    const [currentEdnTime, setCurrentEndTime] = useState(currEndDate)
    useEffect(() => {
        const intervalId = setInterval(() => {
            let leftTime = 600000 - (Date.now() - currentEdnTime)
            let seconds = Math.floor(leftTime / 1000)
            let minutes = Math.floor(seconds / 60)
            let hours = Math.floor(minutes / 60)
            minutes = Math.floor(minutes % 60)
            seconds = Math.floor(seconds % 60)

            if (isNaN(hours)) {
                setTimeData({
                    seconds: '00',
                    minutes: '00',
                    hours: '00'
                })
                return () => clearInterval(intervalId)
            }
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            if (hours < 10) {
                hours = `0${hours}`
            }

            if (hours < 1 && minutes < 1 && seconds < 1) {
                if (item.winBet) {
                    auctionService.buyNow(item._id, item.winBet)
                        .then(() => {
                            auctionService.del(item._id)
                                .catch(() => navigate('/404'))
                        })
                        .then(() => navigate(`/auth/profile/${item.winBet}`))
                        .catch(() => navigate('/404'))
                } else {
                    auctionService.del(item._id)
                        .catch(() => navigate('/404'))
                }
                navigate('/')
                return clearInterval(intervalId)
            }

            const time = { seconds, minutes, hours }

            setCurrentEndTime(oldcurrTime => oldcurrTime)
            setTimeData(time)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [currentEdnTime, item._id, item.winBet, navigate, timeData])


    return (
        <div className={styles.time}>
            <span>{timeData.hours}</span>:<span>{timeData.minutes}</span>:
            <span>{timeData.seconds}</span>
        </div>
    )
}
