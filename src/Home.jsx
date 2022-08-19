import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img
                        src="https://i.ibb.co/xLRMvF7/cover.jpg"
                        alt=""
                        className="home_image"
                    />
                    <h1>Our Products</h1>
                    <div className="parent">
                        <div className="home_row">
                            <Product
                                id="1"
                                title="Google Pixel 6 Pro 5G (Stromy Black, 12GB RAM, 128GB Storage)"
                                price={64990}
                                rating={3}
                                image="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp"
                            />
                            <Product
                                id="2"
                                title="RB Aviator Smoke Black lens Copper Frame Rb3026 full UV Protected"
                                price={3995}
                                rating={4}
                                image="https://i.ibb.co/yNDz1YJ/pngegg.png"
                            />
                            <Product
                                id="3"
                                title="Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)"
                                price={1495}
                                rating={3}
                                image="https://i.ibb.co/Rcwmq7k/pngkey-com-gaming-mouse-png-9575055.png"
                            />
                            <Product
                                id="4"
                                title="Men's Regular Fit Cotton Casual Shirt"
                                price={1299}
                                rating={2}
                                image="https://i.ibb.co/Zg3z7Jr/fashion-hugo-boss-sportswear-model-winter-men-s-jeans-e9c1c5ea107eada47b26981e63cdd045.png"
                            />
                            <Product
                                id="5"
                                title="GRECIILOOKS Western Dresses for Women |A-Line Knee-Length Dress |Stylish Tops"
                                price={1399}
                                rating={1}
                                image="https://i.ibb.co/qDbqhDC/Nice-Png-clothes-png-1146897.png"
                            />
                            <Product
                                id="6"
                                title="Acer One 14 Business Laptop AMD Ryzen 3 3250U Processor (8GB RAM/256GB SSD/AMD Radeon Graphics/Windows 11 Home) Z2-493 with 35.56 cm (14.0) HD Display"
                                price={57490}
                                rating={4}
                                image="https://i.ibb.co/6Jbtb55/699131.png"
                            />
                            <Product
                                id="7"
                                title="Apple iPhone 13 Pro Max (256GB) - Sierra Blue"
                                price={129990}
                                rating={5}
                                image="https://i.ibb.co/9Y383KV/Png-Item-1062393.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
