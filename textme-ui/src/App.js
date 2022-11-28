/*import { ApolloProvider, ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import FriendsList from "./components/FriendsList";*/
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatMessages from "./components/ChatMessages";




function App() {
  /*  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4080/grpahql",
  });*/

  return (
    /* <ApolloProvider client={client}>*/
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <ChatMessages></ChatMessages>
      </div>
    </div>
    /* </ApolloProvider>*/
  );
}

export default App;
