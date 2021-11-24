import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import CarouselContainer from "./components/CarouselContainer";



const App = () => {
  return (
    <Router>
        <Header />
        <main>
          <Route path="/" component={CarouselContainer} exact />
          <Switch>
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
    </Router>
  );
};

export default App;
