import '../Day.css'
import foodObj from '../foodObj.json'

const colorFactoryURL = "https://www.colorfactory.co/locations/new-york-city?utm_source=google&utm_medium=cpc&utm_campaign=20159340619&utm_term=color%20factory%20nyc&kw=color%20factory%20nyc&cpn=20159340619&utm_source=google&utm_medium=cpc&utm_campaign=20159340619&utm_term=color%20factory%20nyc&gad_source=1&gclid=Cj0KCQjwn7mwBhCiARIsAGoxjaJPZnACyRcKjaqMhhdYwcvipHZZ4Rv7X0AvhIpJZjpOPJ91kXVq7YMaAgcXEALw_wcB"

function Day1(){
    return(
        <>
        <div className='day'>
            <h1 className="birthdate-title">April 19</h1>
            <h2>Departure Time <span className="time-title">10:00 am</span></h2>
            <h3>From Darren's House</h3>
            <h2 className="car-title">Car 1</h2>
                <p>Darren (Driver)</p>
                <p>Jamal</p>
                <p>Awa</p>
                <p>Rella</p>
                <p>Chante</p>
            <h2>Car 2</h2>
                <p>Josh (Driver) </p>
                <p>Manny</p>
                <p>Terrence</p>
            <h2 className="time-title">Arrival Time <span className="time-title">2:30 pm</span></h2>
            <br></br>
            <div>
                <h2 className="time-title">Color Factory <span className="time-title">6:00 pm (Leave by 4:45pm)</span></h2>
                <div>Address: 251 Spring St, New York, NY 10013</div>
                <a href= { colorFactoryURL }>Buy Tickets Here</a>
                <span> Price: $48</span>
                <h2>Dress Code: COMFY</h2>
                <br></br>
                <h2>Game/Movie Night</h2>
                <p>Switch</p>
                <p>PlayStation!</p>
                <p>Everyone pick a movie & we choose from them!</p>
            </div>
            <br></br>
            <div>
                <h2>Food Options</h2>
                <p><a href={foodObj['brixx']}>Brixx & Barley</a> || American Restaurant</p>
                <p><a href={foodObj['fresco']}>Fresco Creperie & Cafe</a> || Coffee Shop</p>
                <p><a href={foodObj['shorehouse']}>Shore House Bar & Grill</a> || American Restaurant</p>
                <p><a href={foodObj['tuttifrutti']}>Tutti Frutti Frozen Yogurt</a> || Dessert</p>
                <p><a href={foodObj['lbsocial']}>LB Social</a> || American Restaurant</p>
                <p><a href={foodObj['beginnings']}>Beginnings</a> || Pub</p>
                <p><a href={foodObj['beachburger']}>Beach Burger</a> || American Food</p>
                <p><a href={foodObj['fiveocean']}>Five Ocean</a> || American Restaurant</p>
               <p><a href={foodObj['cabana']}className="food-link">The Cabana</a> Mexican/American Restaurant</p>
            </div>
        </div>
        </>
    )
}

export default Day1