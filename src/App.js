import { Container } from "react-bootstrap";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import Welcome from "./Components/Screens/HomeScreen/Welcome"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collection from "./Components/Screens/Collection/Collection";
import Login from "./Components/Screens/Login/Login";
import Register from "./Components/Screens/Login/Register";
import Upload from "./Components/Screens/Upload/Upload"

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/home" component={HomeScreen} />
          <Route path="/" component={Welcome} exact />
          <Route path="/collection/:id" component={Collection} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/upload" component={Upload} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
