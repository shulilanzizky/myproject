import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from 'react-router-dom';
import Home from './home';
import Form from './form';
import Show from './show';
import AllUser from './alluser';
export default function Menu() {

    return (
        <div>
        
           <Router>
           <Home></Home>
         <Switch>
           <Route path="/form">
          <Form></Form>
           </Route>
           <Route path="/show">
            <Show></Show>
           </Route>
           <Route path="/allUser">
           <AllUser></AllUser>
           </Route>
           
         </Switch>

       </Router>


        </div>
    )}
