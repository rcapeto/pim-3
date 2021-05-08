import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Rooms from '../pages/Rooms';

export default function Routes() {
   return(
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/rooms" exact component={Rooms}/>
         </Switch>
      </BrowserRouter>
   );
}