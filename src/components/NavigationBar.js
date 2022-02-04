import React from 'react';
import { Link } from 'react-router-dom';


//?  F U N C T I O N A L   C O M P O N E N T
const NavigationBar = () => {

    return (
        <div>

            <Link to="/artgallery">
                <div>
                    a r t g a l l e r y
                </div>
            </Link>

            <Link to="/artgallery/artists">
                <div>
                    a r t i s t s
                </div>
            </Link>

        </div>
    )

}
export default NavigationBar;