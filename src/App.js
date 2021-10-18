import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer";
import Header from "./components/Header/Header";
import Contact from "./pages/contact";

const Home = lazy(() => import("./pages/home"));

function App() {
  const [location, setLocation] = useState({});
  // console.log(location);

  return (
    <div className={`App ${location.pathname === "/contact" && "add__bg"}`}>
      <BrowserRouter>
        <Suspense fallback={<p></p>}>
          <Header setLocation={setLocation} />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
