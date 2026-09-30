import '../App'
import Section from './Section'
import React from 'react';
import Cards from './Cards'

function Home() {
    return(
    <>
        <Section/>
        <div className="card-section" style={{backgroundColor:"white"}}>
        <Cards/>
        </div>
        
    </>
    );
}

export default Home;