import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/footer";
import Container from "./Components/Container/Container";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri:'http://localhost:3007/graphql',

})

function App() {


  return (
      <ApolloProvider client={client}>
        <div className="App">
            <Container>
                 <Header/>
                 <Main />
                 <Footer />
            </Container>
        </div>
      </ApolloProvider>
  );
}

export default App;
