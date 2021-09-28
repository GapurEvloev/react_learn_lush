import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import "./App.css"

function App() {
    return (
        <div className="container">
            <Header />
            <Main />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App