import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import HospitalLocator from './HospitalLocator';
import PharmacyFinder from './PharmacyFinder';
import Feedback from './Feedback';
import AboutUs from './AboutUs';
import Diseases from './Diseases';
import DrawerComponent from './DrawerComponent';

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={DrawerComponent}/>
                    <Route path="/HospitalLocator" exact component={HospitalLocator}/>
                    <Route path="/PharmacyFinder" exact component={PharmacyFinder}/>
                    <Route path="/Feedback" exact component={Feedback}/>
                    <Route path="/AboutUs" exact component={AboutUs}/>
                    <Route path="/Diseases" exact component={Diseases} />
                </BrowserRouter>
            </div>
        )
    }
}
export default App;