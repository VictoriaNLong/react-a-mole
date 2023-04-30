import { useEffect } from 'react'
import mole from '../embedded/mole.png'

export default function Mole({onMoleClick, setIsShowing}) {
    useEffect(() => {
        let randMills = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setIsShowing(false)
        }, randMills)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            style={{'width': '30vw'}} 
            src={mole} 
            onClick={onMoleClick}
            />
        </div>
    )
}