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
import EditImage from "./Components/Screens/EditImage/EditImage"
import GenerateImage from "./Components/Screens/GenerateImage/GenerateImage"

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        <Route path="/" component={Welcome} exact />
          <Route path="/home" component={HomeScreen} />
          <Route path="/collection/:id" component={Collection} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/upload" component={Upload} />
          <Route path="/edit-image" component={EditImage} />
          <Route path="/generate-image" component={GenerateImage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
