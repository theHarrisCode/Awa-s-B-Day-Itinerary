import '../Day.css'
import foodObj from '../foodObj.json'

function Day2(){
    return(
        <>
        <div className='day'>
            <div>
                <h1 className="birthdate-title">April 20</h1>
                <h2>Woodland Brunch <span className="time-title">12:00 pm</span></h2>
                <div>Address: 572 Fulton St, Brooklyn, NY 11217</div>
                <p>Check menu <a href={ foodObj['woodland'] }>here</a></p>
                <h2>Dress Code: SEXY & FLY</h2>
            </div>
            <h3>Cuts & Slices</h3>
            <div>Address: 93 Howard Ave, Brooklyn, NY 11233</div>
            <p>Check menu <a href={ foodObj['cutsandslices'] }>here</a></p>
            <div>
                <h1>Slumber Party</h1>
                <div>
                    <p>Board Games</p>
                    <p>Drinkng Games</p>
                    <p>Karaoke</p>
                    <p>Spa</p>

                    <h2>Colors:</h2>
                    <div className="colors-container">                        
                        <span style={{'color': '#0B60B0'}}>Awa </span>
                        <span style={{'color': '#FF71CD'}}>Mirella </span>
                        <span style={{'color': '#E72929'}}>Jyaito </span>
                        <span style={{'color': 'black'}}>Desire </span>
                        <span style={{'color': '#8644A2'}}>Chante </span>
                        <span style={{'color': '#E72929'}}>Ashaad </span>
                        <span style={{'color': '#76453B'}}>Manny </span>
                        <span style={{'color': 'yellow'}}>Jamal </span>
                        <span style={{'color': 'white'}}>Terrence </span>
                        <span style={{'color': 'green'}}>Josh </span>
                        <span style={{'color': 'orange'}}>Darren </span>
                    </div>
                    <p>Everyone bring PJs, a few snacks and drinks according to your color choice!</p>
                    <h2>Dress Code: COZY</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Day2