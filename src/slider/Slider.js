import { motion } from 'framer-motion'
import './Slider.css'
import { Data } from '../Data';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [m, setM] = useState(0)
    const n = useRef()
    useEffect(() => {
        setM(n.current.scrollWidth - n.current.offsetWidth)
    }, [])
    // console.log(Data[1].companysite)
    return (
        <div >
            <motion.div ref={n} className='main-sec'>
                <motion.div drag='x' dragConstraints={{ right: 0, left: -m }} className='motion'>
                    {
                        Data.map((data,index) => {
                            return (
                                 <a className='single-card' target="_blank" href={data.companysite}> 
                             <div key={index} >
                                 {/* <Link to={data[index].companysite}> */}
                                    <div className='cont'>
                                    <h3>{data.position}</h3>
                                    <h3>{data.title}</h3>
                                    <h3>{data.summary}</h3>
                                    {/* </Link> */}
                                   </div>                
                                 <img src={data.img} width={'400px'} height={'200px'} />
                                </div>
                                 </a>    
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div >
    );
}

export default Slider;