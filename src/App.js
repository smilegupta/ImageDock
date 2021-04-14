import { Container } from "react-bootstrap";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import HomeScreen2 from "./Components/Screens/HomeScreen/HomeScreen2"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collection from "./Components/Screens/Collection/Collection";
import Login from "./Components/Screens/Login/Login";
import Register from "./Components/Screens/Login/Register";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/home" component={HomeScreen} />
          <Route path="/" component={HomeScreen2} exact />
          <Route path="/collection/:id" component={Collection} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
