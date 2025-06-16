// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Mascotas from './Mascotas';
import './App.css';

function Home() {
    return <h1>Bienvenidos a la Página de Inicio</h1>;
}

function About() {
    return <h2>Acerca de Nosotros</h2>;
}

function App() {
    return (
       <BrowserRouter basename="/desafio3">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="mascotas" element={<Mascotas />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
