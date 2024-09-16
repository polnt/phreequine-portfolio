import './App.css';

import { Header } from './components/Header/Header';
import Router from './Router';

function App() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
    </>
  );
}

export default App;
