import { Container } from "react-bootstrap";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import Welcome from "./Components/Screens/HomeScreen/Welcome"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collection from "./Components/Screens/Collection/Collection";
import Login from "./Components/Screens/Auth/Login";
import Register from "./Components/Screens/Auth/Register";
import Upload from "./Components/Screens/Upload/Upload"
import GenerateImage from "./Components/Screens/GenerateImage/GenerateImage"
import ForgetPassword from "./Components/Screens/Auth/ForgotPassword"
import NewPassWord from "./Components/Screens/Auth/NewPassWord"

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
          <Route path="/generate-image" component={GenerateImage} />
          <Route path="/forgot-password" component={ForgetPassword} exact />
          <Route path="/forgot-password/:email" component={ForgetPassword} />
          <Route path="/new-password/:email" component={NewPassWord} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
