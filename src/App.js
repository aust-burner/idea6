import React from 'react';
import IdeaContextProvider from './contexts/IdeaContext';
import NavBar from './components/Navbar';
import IdeaList from './components/IdeaList';
import IdeaForm from './components/IdeaForm';



function App() {
  return (
    <div className="App">
      <IdeaContextProvider>
        <NavBar />
        <IdeaList />
        <IdeaForm />
      </IdeaContextProvider>
    </div>
  );
}

export default App;
