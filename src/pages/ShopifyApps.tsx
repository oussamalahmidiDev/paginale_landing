import React from "react";
import {Link} from "react-router-dom";

export const ShopifyApps = (props: any) => {


    return <>
        <main id="main">
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <ol>
                        <li><Link
                            to="/">Home</Link></li>
                        <li>All Shopify Apps</li>
                    </ol>
                    <h2>Explore Our Shopify Apps</h2>
                </div>
            </section>

            <section className="inner-page">
                <ul className="container">
                    <li className="app-item row">
                        <div className="col">
                            <img
                                src="/assets/img/apps/orderify-logo.png"
                                alt=""
                                className="app-icon"
                            />
                        </div>
                        <div className="col">
                            <h2 className="app-title mb-3">Orderify</h2>
                            <p className="app-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Excepturi rerum facere minima unde inventore numquam, qui ea
                                adipisci tempore, rem asperiores. Iusto, consequuntur vitae ipsa
                                sapiente libero nobis. Reiciendis, ullam!
                            </p>
                            <a href="orderify.html" className="app-btn">See More</a>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    </>;
};
