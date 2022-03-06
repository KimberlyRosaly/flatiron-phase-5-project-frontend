import React from 'react';
import { Link } from 'react-router-dom';


//?  F U N C T I O N A L   C O M P O N E N T
const NavigationBar = () => {

    return (
        <div className='navbar'>
            <ul>
                <Link to="/artgallery">
                    <li><button className='n-button'>
                         <div style={{color:'red'}}>-♥-</div>                         
                         a r t g a l l e r y
                    <br/>showcase
                    </button>
                    </li>
                </Link>

                <Link to="/artgallery/artists">
                    <li><button className='n-button'>
                        a r t i s t s
                    </button></li>
                </Link>

                <Link to="/artgallery/artworks">
                    <li><button className='n-button'>
                        a r t w o r k s
                    </button></li>
                </Link>
            </ul>
        </div>
    )

}
export default NavigationBar;