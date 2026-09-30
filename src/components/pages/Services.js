
import React from 'react';
import '../../App.css';
import '../Cards.css';
import Cards from '../Cards';

export default function Services() {


    return (
        <>
            <div className='services'>
                <div className='container'>
                    <div className='search-btn'>
                        <div className='search-box'>
                            <button className="btn-search" id='search-button'><i class="fas fa-search"></i></button>
                            <input type="text" className="input-search" placeholder="Type to Search..." />
                        </div>
                    </div>
                </div>
                <Cards />
            </div>

        </>
    )

}