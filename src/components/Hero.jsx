const Hero = () => {
    return <main className="hero container">
        <div className="hero-content">
            <h1> YOUR FEET DESERVE THE BEST</h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
            SHOES.
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available</p>
                <div className="brand-icons">
                    <img src="/brandspot-react-app/images/flipkart.png" alt="flipkart-icon" />
                    <img src="/brandspot-react-app/images/amazon.png" alt="amazon-icon" />
                </div>
            </div>
        </div>
        <div className="hero-image">
        <img src="/brandspot-react-app/images/shoe_image.png" alt="hero-image" />
        </div>
    </main>
}

export default Hero;