import { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Common/Header";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import Welcome from "./Components/Screens/HomeScreen/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Collection from "./Components/Screens/Collection/Collection";
import Login from "./Components/Screens/Auth/Login";
import Register from "./Components/Screens/Auth/Register";
import Upload from "./Components/Screens/Upload/Upload";
import GenerateImage from "./Components/Screens/GenerateImage/GenerateImage";
import ForgetPassword from "./Components/Screens/Auth/ForgotPassword";
import NewPassWord from "./Components/Screens/Auth/NewPassWord";
import { Auth } from "aws-amplify";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import ErrorPage from "./Components/Common/ErrorPage";

function App() {
  // State Variables
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  // Props for Session Management
  const authProps = {
    isAuthenticated,
    user,
    setUser,
    setAuthenticated,
  };

  useEffect(() => {
    async function sessionChecker() {
      try {
        await Auth.currentSession();
        setAuthenticated(true);
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (err) {
        console.error(err);
      }
      setAuthenticating(false);
    }
    sessionChecker();
  }, []);

  return (
    <Fragment>
      {isAuthenticating === false && (
        <Router>
          <Header auth={authProps} />
          <main className="py-3">
            <Container>
              <Switch>
                <Route path="/" component={Welcome} exact />
                <ProtectedRoute
                  path="/home"
                  component={HomeScreen}
                  auth={authProps}
                />
                <ProtectedRoute
                  path="/collection/:id/:name"
                  component={Collection}
                  auth={authProps}
                />
                <Route
                  path="/login"
                  render={(props) => <Login {...props} auth={authProps} />}
                />
                <Route
                  path="/register"
                  render={(props) => <Register {...props} auth={authProps} />}
                />
                <Route path="/upload" component={Upload} />
                <Route path="/generate-image" component={GenerateImage} />
                <Route
                  path="/forgot-password"
                  render={(props) => (
                    <ForgetPassword {...props} auth={authProps} />
                  )}
                  exact
                />
                <Route
                  path="/forgot-password/:email"
                  render={(props) => (
                    <ForgetPassword {...props} auth={authProps} />
                  )}
                />
                <Route
                  path="/new-password/:email"
                  render={(props) => (
                    <NewPassWord {...props} auth={authProps} />
                  )}
                />
                <Route component={ErrorPage} />
              </Switch>
            </Container>
          </main>
        </Router>
      )}
    </Fragment>
  );
}

export default App;
