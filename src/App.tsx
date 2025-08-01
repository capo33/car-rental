import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <div className="app">
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {!isOwnerPath && <Header setShowLogin={setShowLogin} />}
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      {!isOwnerPath && <Footer />}
    </div>
  );
}

export default App;
