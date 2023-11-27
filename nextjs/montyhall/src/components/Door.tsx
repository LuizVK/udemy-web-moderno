import Gift from './Gift'
import styles from '../styles/Door.module.css'
import { useState } from "react";

interface DoorProps {
    number: number,
    hasGift?: boolean
}

export default function Door(props: DoorProps) {

    const [open, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<boolean>(false)

    function knobClick() {
        setOpen(true)
    }

    function doorClick() {
        setSelected(!selected)
    }

    return (
        <div className={styles.doorArea}>
            <div className={`
                ${styles.doorFrame} 
                ${selected && !open ? 
                    'border-r-yellow-400 border-t-yellow-400 border-l-yellow-400' 
                    : 'border-r-yellow-900 border-t-yellow-900 border-l-yellow-900'
                }
            `}>
                {open && props.hasGift ? (
                    <Gift />
                ) : false }
            </div>
            <div className={` 
                ${styles.door} 
                ${open ? 'bg-black opacity-50' : 'bg-amber-700'} 
            `} onClick={doorClick}>
                <div className={`
                    ${styles.number} 
                    ${selected ? 'text-yellow-400' : ''} 
                    ${open ? 'hidden' : ''} 
                `} >
                    {props.number}
                </div>
                <div className={`
                    ${styles.knob} 
                    ${selected ? 'bg-yellow-400' : 'bg-yellow-900'} 
                    ${open ? 'hidden' : ''}
                `} onClick={knobClick}></div>
            </div>
        </div>
    )
}