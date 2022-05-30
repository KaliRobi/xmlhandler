import {AppProvider} from "./context/AppContext";
import MainPage from "./page/MainPage";
import NavBar from "./components/header";

function App() {
  return (
    <AppProvider>
    
    <div className="h-max">
      <div>
        <NavBar />
      </div>
      <main >
    
    
    <MainPage /> 
    </main>
    
    
    </ div>
    </AppProvider>
  );
}

export default App;
