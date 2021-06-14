import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from 'react-router-dom';
import Form from './form';
import Show from './show';
import AllUser from './alluser';
export default function Home() {
 const isTrue=true
    return (

        <div>
           

            <nav class="nav nav-pills nav-justified" >
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"> */}
                <a class="nav-item nav-link" href="#"><Link to="/form">טופס</Link></a>
                <br></br>
                <a class="nav-item nav-link" href="#"><Link to="/show" disabled>הצגה</Link></a>
                <br></br>
                <a class="nav-item nav-link" href="#"><Link to="/allUser">הצגת משתמשים</Link></a>
                <br></br>
                {/* <a class="nav-item nav-link "><Link to="/">דף הבית</Link></a> */}
            </nav>
        </div>

    )
}
