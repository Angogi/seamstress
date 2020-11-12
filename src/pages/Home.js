import React from 'react';
import "./Home.css";
import PostCard from '../components/CardHomeSection1';
import ProductCard from '../components/ProductCard';

function Home() {
    return (
        <div className="home">
            <div className="section section1">
                <div className="content">
                    <h1>Taller de costura</h1>
                    <p>
                        ¡Hola, bienvenidos y bienvenidas!<br/>
                        <b className="noras__name">Soy Nora</b>, y estoy encantada que estes aquí, seguramente encontrarás 
                        información valiosa en mi <h4>costurero.</h4>
                    </p>
                </div> 
                <div className="content ">
                    <h3>Novedades</h3>

                    <div className="showcase">

                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        

                    </div> 

                </div> 
               
            </div> 
            <div className="section section2">
                
                <div className="item1 text">
                    <p>At quaeque adversarium ius, sed at integre persius verterem. 
                        Sit summo tibique at, eam et fugit complectitur, vis te natum vivendum mandamus. 
                        Iudico quodsi cum ad, dicit everti sensibus in sea, ea eius paulo deterruisset pri. 
                        Pro id aliquam hendrerit definitiones. Per et legimus delectus.
                    </p>
                </div>

                <div className="item1 image"></div>

                <div className="item2 product__container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    
                </div>
                {/* <div className="item2"></div> */}
               
            </div> 
            <div className="section section3">
                <div className="divType1"></div>
                <div className="divType1"></div>
                <div className="divType2"></div>
               
            </div> 
            
            <div className="section section4">
                <h1>Hello</h1>
               
            </div> 
        </div>
    )
}

export default Home
