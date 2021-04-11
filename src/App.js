import { Container } from "react-bootstrap";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collection from "./Components/Screens/Collection/Collection";
import Login from "./Components/Screens/Login/Login";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/collection/:id" component={Collection} />
          <Route path="login" component={Login} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
