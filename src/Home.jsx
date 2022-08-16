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
                                title="Google Pixel 3 Pro with 256 GB Internal Memory and 6 GB RAM"
                                cost={100}
                                rating={3}
                                img="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp"
                            />
                            <Product
                                id="2"
                                title="Google Pixel 4 Pro with 256 GB Internal Memory and 6 GB RAM"
                                cost={200}
                                rating={4}
                                img="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp"
                            />
                            <Product
                                id="3"
                                title="Google Pixel 5 Pro with 256 GB Internal Memory and 6 GB RAM"
                                cost={300}
                                rating={3}
                                img="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp"
                            />
                            <Product
                                id="4"
                                title="Google Pixel 6 Pro with 256 GB Internal Memory and 6 GB RAM"
                                cost={400}
                                rating={2}
                                img="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp"
                            />
                            <Product
                                id="5"
                                title="Google Pixel 7 Pro with 256 GB Internal Memory and 6 GB RAM"
                                cost={500}
                                rating={1}
                                img="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp"
                            />
                            <Product
                                id="6"
                                title="IPhone X Special Edition with 256 GB Internal Memory and 6 GB RAM"
                                cost={450}
                                rating={4}
                                img="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp"
                            />
                            <Product
                                id="7"
                                title="Iphone XS Pro with 256 GB Internal Memory and 6 GB RAM"
                                cost={670}
                                rating={5}
                                img="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
