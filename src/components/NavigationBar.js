import React from 'react';
import { Link } from 'react-router-dom';


//?  F U N C T I O N A L   C O M P O N E N T
const NavigationBar = () => {

    return (
        <div className='navbar'>
            <ul>
                <Link to="/artgallery">
                    <li>
                        a r t g a l l e r y
                    </li>
                </Link>

                <Link to="/artgallery/artists">
                    <li>
                        a r t i s t s
                    </li>
                </Link>

                <Link to="/artgallery/artworks">
                    <li>
                        a r t w o r k s
                    </li>
                </Link>
            </ul>
        </div>
    )

}
export default NavigationBar;