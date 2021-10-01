import './App.css';
import Home from './Components/home/home';
import Profile from './Components/userProfile/profile';
import { Switch, Route, useLocation } from "react-router-dom";
import Header from './Components/header/header';
import UserRegistrarion from './Components/userRegisteration/userRegistration';
import Footer from './Components/footer/footer';
import { useEffect } from 'react';
import { useState } from 'react';
import GetMoney from './Components/getMoney/getMoney';
import ArtistProfile from './ArtistProfile/artistProfile';

function App() {
  const location = useLocation();
  const [show, setShow] = useState(true);

  // console.log({ location })
  useEffect(() => {
    if (location.pathname.includes("/userregistration") || location.pathname.includes("/artistprofile")) setShow(false);
    else setShow(true)
  }, [location])

  return (
    <div className="App">
      {show && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/getmoney" component={GetMoney} />
        <Route exact path="/artistprofile" component={ArtistProfile} />
        <Route exact path="/userregistration" component={UserRegistrarion} />
      </Switch>
      {show && <Footer />}
    </div>
  );
}

export default App;
