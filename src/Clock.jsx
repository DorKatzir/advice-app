import { useEffect, useState } from "react"

export default function Clock() {

    const [time, setTime] = useState( new Date().toLocaleTimeString())

    useEffect(() => { 

        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

    },[])

    return <div>{ time }</div>
}




