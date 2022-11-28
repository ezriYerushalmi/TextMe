import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


import TextMe from "./components/TextMe";


function App() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "http://localhost:4080/grpahql",
    });



    return (
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route path='/users' element={<TextMe/>}/>
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default App;
