import '../NavBar.css'
// import { StyleSheet, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

function NavBar() {
    const flower = require('../Images/wired-outline-1832-sunflower.json');
    const confetti = require('../Images/wired-outline-1103-confetti.json');
    const hat = require('../Images/wired-outline-1106-birthday-hat.json');

    const playerRef = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);

    useEffect(() => {
        playerRef.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
    }, []);

    return(
        <nav className='nav-bar'>
            <div className="nav-text">
                <h2>Awa's 25th Birthday Party</h2>
            </div>
            <div className="nav-gif">
                <Player ref={playerRef} size={96} icon={flower} onComplete={() => playerRef.current?.playFromBeginning()}/>
                <Player ref={playerRef2} size={96} icon={confetti} onComplete={() => playerRef2.current?.playFromBeginning()}/>
                <Player ref={playerRef3} size={96} icon={hat} onComplete={() => playerRef3.current?.playFromBeginning()}/>
            </div>
        </nav>
    ); 
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       gap: 20,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//       flexDirection: 'column',
//     },
//  });   

export default NavBar;