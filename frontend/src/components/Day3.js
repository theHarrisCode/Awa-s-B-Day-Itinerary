
function Day3(){
    const renaissanceLink =  "https://renaissancenyc.com/";

    return(
        <>
            <div className="day">
                <h1 className="birthdate-title">April 21</h1>
                <h2>Renaissance Church  <span className="time-title">11:30am</span></h2>
                <div>Address: 220 W 121st St, New York, NY 10027</div>
                <p>Learn more about the church <a href={ renaissanceLink }>here</a></p>
                <h2>Dress Code: DRESS YOUR BEST (Sunday Casual)</h2>
            </div>
        </>
    )
}

export default Day3