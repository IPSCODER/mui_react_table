import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Theme from './theme/Theme';
import Home from './pages/home/Home';
import MyComponent from './pages/HooksComponent/MyComponent';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Theme/>} >
  <Route path='/' element={<Home/>} />
  <Route path='/hooks' element={<MyComponent/>} />
  </Route>
</Routes>
</BrowserRouter>
</>    
  );
}

export default App;
