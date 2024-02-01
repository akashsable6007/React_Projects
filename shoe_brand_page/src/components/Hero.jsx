import amazon from '../assets/Images/amazon.png';
import flipkart from '../assets/Images/flipkart.png';
import hero from '../assets/Images/hero-image.png';
import './hero.css';


function Hero (){
    return(
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP
                    YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP
                    YOU WITH OUR SHOES.
                </p>
            </div>
            <div className="hero-btn">
                <button className='shopnow'>Shop Now</button>
                <button id="btn2">Category</button>
            </div>
            <div className="shopping">
                <p>Order From</p>
            <div className="brand-icons">
                <img src= {amazon} alt="logo" />
                <img src= {flipkart} alt="logo" />
            </div>
            </div>
            <div className="hero-image">
                <img src={hero} alt="logo" />
            </div>
           
        </main>
    );
};
export default Hero;
