import Day from './Day'
import '../DisplayPage.css'
import deepblue from '../Images/deep-blue-lipstick.png'
import navyblue from '../Images/navyblue.png'
import teal from '../Images/teal.png'
import paint from '../Images/paint.png'
import pajamas from '../Images/pajamas.png'
import car1 from '../Images/car1.png'
import car2 from '../Images/car2.png'
import Day1 from './Day1'
import Day2 from './Day2'
import Day3 from './Day3'




function DisplayPage() {
    return(
        <div className='display-page'>
            <Day 
                image1 = { deepblue }
                image2 = { navyblue }
                image3 = { teal }
                date = { '19th' }
                txtColor = { '#5F754F' }
                day = { <Day1/> }
                />
            <Day
                image1 = { paint }
                image2 = { pajamas }
                date = { '20th' }
                txtColor = { '#1E4A9C' }
                day = { <Day2/> }
                />            
            <Day
                image1 = { car1 }
                image2 = { car2 }
                date = { '21st' }
                txtColor = { '#101040' }
                day = { <Day3/> }
                />
        </div>
    )
}

export default DisplayPage
