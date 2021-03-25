import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/footer";
import Container from "./Components/Container/Container";






function App() {
  return (
    <div className="App">
    <Container>
     <Header/>
     <Main />
     <Footer />
    </Container>
    </div>
  );
}

export default App;
