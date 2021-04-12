import {appsList} from "../AppsList";
import React, {Fragment, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const ShopifyAppDetails = (props: any) => {
    const params = useParams() as any;
    const app = appsList.find(app => params.app === app.id);

    const [preview, setPreview] = useState({show: false, image: "" });

    const ImagePreview = (image: any) => <div className="screenshot-full">
        <div className="overlay"></div>
        <div className="img-container">
            <img src={image} alt=""/>
        </div>
    </div>;
    console.log(app);
    if (!app) return <p>Not Found</p>;
    return <Fragment>
        <main id="main">
            <section id="breadcrumbs" className="mt-0 breadcrumbs">
                <div className="container">
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>   <Link to="../shopify-apps/">
                            All Shopify Apps
                        </Link></li>
                        <li>{app.name}</li>
                    </ol>
                    <h2>{app.name}</h2>
                    {/*<h4>{app.name}</h4>*/}
                </div>
            </section>

            <section className="inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <h2 className={"mb-4"}>Description</h2>
                            <p>
                                {app.description}
                            </p>
                            <h2 className={"mt-5 mb-4"}>Screenshots</h2>
                            <div className="app-screenshots">
                                {app.screenshots?.map(screenshot =>
                                    <img onClick={() => setPreview({show: true, image: screenshot})} className="app-preview" src={screenshot} alt=""/>
                                )
                                }
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={app.icon} width={"max-content"} alt="" className="app-logo"/>
                            <button style={{width: "100%"}} className={"mt-2 btn btn-primary"}>View in Store</button>
                            <hr/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        {preview.show && <div onClick={() => setPreview({show: false, image: ""})} className="screenshot-full">
            {/*<div className="overlay"></div>*/}
            <div className="img-container">
                <img src={preview.image} style={{ display: "block", margin: "auto" }} alt=""/>
            </div>
        </div>}
    </Fragment>;
}
