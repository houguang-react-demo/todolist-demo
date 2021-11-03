import Header from './components/Header/Index'
import List from './components/List/Index'
import Footer from './components/Footer/Index'

import './App.css';

function App() {
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header/>
                <List/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
