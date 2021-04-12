import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import {App, appsList} from "../AppsList";

export const ShopifyApps = (props: any) => {

    const appCard = (app: App, key: number) => <li key={key} className="app-item">
        <div className="mr-3">
            <img
                src={app.icon}
                alt=""
                className="app-icon"
            />
        </div>
        <div className="">
            <h2 className="app-title mb-3">{app.name}</h2>
            <p className="app-description">
                {app.description}
            </p>
            <Link to={app.id} className="app-btn">See More</Link>
        </div>
    </li>;

    return <Fragment>
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
                <div className="apps-container container">
                    {appsList.map(appCard)}
                </div>
            </section>
        </main>
    </Fragment>;
};
