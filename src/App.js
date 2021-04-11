import { Container } from "react-bootstrap";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen"

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
