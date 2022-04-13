import '../navbar/NavBar.css'
import React from 'react';

function NavigationBar(props) {
    return (
        <div className='nav'>
            <a href="">
                <h1 className='logo'>Costanza</h1>
            </a>
            <ul>
                <a href="index.html">Hot &#x1F525;</a>
                <a href="index.html">Gaming</a>
                <a href="index.html">Smartphones</a>
                <a href="index.html">Insumos</a>
                <a href="index.html">Contact</a>
                <a href="index.html">Loggin</a>
            </ul>
        </div>
    );
}

export default NavigationBar;