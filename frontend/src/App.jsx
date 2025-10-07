import {Link,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Create from './pages/Create'
import Update from './pages/Update'
import Header from './components/Header'

function App() {
  
    return(
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/update/:id" element={<Update />} />
            </Routes>
        </div>
    );
}

export default App
