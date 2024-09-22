import { useState, useRef } from "react";

import minus from '../img/minus.png'
import plus from '../img/plus.png'

const Collapse = ({data}) => {
    const [active, setActive] = useState(false);
    const listRef = useRef();

    const handleActive = () => {
        if (!active) {
            listRef.current.style.height = listRef.current.scrollHeight + 'px'
            listRef.current.style.paddingBottom = '10px'
        } else {
            listRef.current.style.height = 0
            listRef.current.style.paddingBottom = 0
        }

        setActive(active => !active);
    }

    return <div className="collapse">
        <button className="collapse-header" onClick={handleActive}>
            <p className="p4">{data.label}</p>
            <img src={active ? minus : plus} alt="icon"/>
        </button>
        <div className="collapse-body" ref={listRef}>
            {data.items.map((item, index) => <p className="p5" key={index}>{item}</p>)}
        </div>
    </div>
}

export default Collapse;