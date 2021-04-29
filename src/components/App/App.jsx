import React from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";
import Header from "../Header/Header";


const App = () => {
  return (
    <main role="main" className="container">
      <Header numItems={5} total={210}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
        />
      </Switch>
    </main>
  );
}

export default App;