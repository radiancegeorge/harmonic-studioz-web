import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer";
import Header from "./components/Header/Header";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
