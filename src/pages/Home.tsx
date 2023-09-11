import React, {useState, useEffect} from "react";
import {FormControl, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
    const navigate = useNavigate();
    const [pickupLocation, setPickupLocation] = useState('')
    const [dropOffLocation, setDropOffLocation] = useState('')
    const [minDate, setMinDate] = useState<Date>()
    const [from, setFrom] = useState<Date>()
    const [to,setTo] = useState<Date>()
    const [sameLocation, setSameLocation] = useState(true)

    useEffect(() => {
        const from = new Date();
        from.setDate(from.getDate() + 1);
        from.setHours(10)
        from.setMinutes(0)
        from.setSeconds(0)
        from.setMilliseconds(0)

        const to = new Date(from)
        to.setDate(to.getDate() + 3)

        setMinDate(new Date())
        setFrom(from)
        setTo(to)
    },[])

    return (
        <div className="home">
            <div className="home-content">
                <div className="home-logo">
                    <label className="home-logo-main"></label>
                    <label className="home-logo-registered"></label>
                </div>
                <div className="home-search">
                    <form className="home-search-from">

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home