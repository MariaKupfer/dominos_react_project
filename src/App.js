import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import './App.css';
import About from './pages/About';
import Club from './pages/Club';
import Franchisepartner from './pages/Franchisepartner';
import Gutscheinecoupons from './pages/Gutscheinecoupons';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Menu from './pages/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="about" element={<About />} />
                    <Route path="club" element={<Club />} />
                    <Route path="franchisepartner" element={<Franchisepartner />} />
                    <Route path="gutscheinecoupons" element={<Gutscheinecoupons />} />
                    <Route path="jobs" element={<Jobs />} />
                    <Route path="login" element={<Login />} />
                    <Route path="menu" element={<Menu />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
