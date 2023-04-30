import { useEffect } from "react"
import molehill from '../embedded/molehill.png'


export default function Empty({setIsShowing}) {
    useEffect(() => {
        let randMills = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setIsShowing(true)
        }, randMills)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            style={{'width': '30vw'}} 
            src={molehill} 
            />
        </div>
    )
}