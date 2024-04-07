// import { deepblue, navyblue, teal} from './DisplayPage.js'
import '../Day.css'
import React, {useState} from 'react'

function Day({ image1, image2, image3, date, txtColor, day }) {
    let img3 = null;
    const [toggle, setToggle] = useState(false)
    const [vanish, setVanish] = useState(true)

    // if 3rd image then display
    if(image3){
        img3 = <img src={image3} alt="image3" className='image3' id='selec-pic'></img>
    }

    // negates value of toggle & vanish to either show or vanish item(s)
    function handleOnClick(){
        setToggle(!toggle);
        setVanish(!vanish);
    }
    
    return(
        <div className='day-container'>
            <div className={vanish ? 'fade-in' : 'fade-out'}>
                <h2 className='bdate-txt' style={{ color: txtColor }}>April {date}</h2>
                    <div className='selection'
                            onClick={() => { handleOnClick() }}>
                            <img src={image1} alt="image1" className='image1' id='selec-pic'></img>
                            <img src={image2} alt="image2" className='image2' id='selec-pic'></img>
                            {img3}
                        </div>
            </div>
        {toggle &&  
            <div className={toggle ? 'fade-in' : 'fade-out' } onClick={() => handleOnClick()}>
                <div className='info-container' >
                    { day }
                </div>
            </div>
            }
    </div>
    )
}

export default Day
