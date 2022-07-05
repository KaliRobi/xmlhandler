import {AppProvider} from "./context/AppContext";
import MainPage from "./page/MainPage";
import NavBar from "./components/header";

function App() {
  return (
    <div  className="h-full">
    <AppProvider>
    
    <div>
      <div>
        <NavBar />
      </div>
      <main >
    
    
    <MainPage /> 
    </main>
    
    
    </ div>
    </AppProvider>
    </div>
  );
}

export default App;
