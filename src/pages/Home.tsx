import React from "react";
import { Link } from "react-router-dom";


export const Home = (props: any) => {
    return <>
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h1>
                            you Dreamed it,<br />
                            we Made It.
                        </h1>
                        <h2>your companion in your footsteps</h2>
                        <div className="d-lg-flex">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        subscribe to newsletters
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 order-1 order-lg-2 hero-img"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <img
                            src="assets/img/hero-img.png"
                            className="img-fluid animated"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
        <main id="main">
            <section id="cliens" className="cliens section-bg">
                <div className="container">
                    <div className="row" data-aos="zoom-in">
                        <div
                            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                        >
                            <img
                                src="assets/img/clients/client-1.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div
                            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                        >
                            <img
                                src="assets/img/clients/client-2.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div
                            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                        >
                            <img
                                src="assets/img/clients/client-3.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div
                            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                        >
                            <img
                                src="assets/img/clients/client-4.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div
                            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                        >
                            <img
                                src="assets/img/clients/client-5.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>

                        <div
                            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                        >
                            <img
                                src="assets/img/clients/client-6.png"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                Paginale is a company that makes life easier for e-commerce
                                merchants by offering them solutions, adaptable to different
                                platforms, Shopify, Wordpress also extensions dedicated to the
                                browser. <br/>
                            </p>
                            <p>
                                Our team of business analysts, computer engineers and designers,
                                in the field of online commerce, continuously seeks to solve all
                                your problems, and help you grow your business and reach more
                                sales.
                            </p>
                            <a href="#" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div
                            className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"
                        >
                            <div className="content">
                                <h3>
                                    Eum ipsam laborum deleniti
                                    <strong>velit pariatur architecto aut nihil</strong>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Duis aute irure dolor in reprehenderit
                                </p>
                            </div>

                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a
                                            data-toggle="collapse"
                                            className="collapse"
                                            href="#accordion-list-1"
                                        ><span>01</span> Non consectetur a erat nam at lectus urna
                                            duis? <i className="bx bx-chevron-down icon-show"></i
                                            ><i className="bx bx-chevron-up icon-close"></i
                                            ></a>
                                        <div
                                            id="accordion-list-1"
                                            className="collapse show"
                                            data-parent=".accordion-list"
                                        >
                                            <p>
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis
                                                urna id volutpat lacus laoreet non curabitur gravida.
                                                Venenatis lectus magna fringilla urna porttitor rhoncus
                                                dolor purus non.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a
                                            data-toggle="collapse"
                                            href="#accordion-list-2"
                                            className="collapsed"
                                        ><span>02</span> Feugiat scelerisque varius morbi enim
                                            nunc? <i className="bx bx-chevron-down icon-show"></i
                                            ><i className="bx bx-chevron-up icon-close"></i
                                            ></a>
                                        <div
                                            id="accordion-list-2"
                                            className="collapse"
                                            data-parent=".accordion-list"
                                        >
                                            <p>
                                                Dolor sit amet consectetur adipiscing elit pellentesque
                                                habitant morbi. Id interdum velit laoreet id donec
                                                ultrices. Fringilla phasellus faucibus scelerisque
                                                eleifend donec pretium. Est pellentesque elit
                                                ullamcorper dignissim. Mauris ultrices eros in cursus
                                                turpis massa tincidunt dui.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a
                                            data-toggle="collapse"
                                            href="#accordion-list-3"
                                            className="collapsed"
                                        ><span>03</span> Dolor sit amet consectetur adipiscing
                                            elit? <i className="bx bx-chevron-down icon-show"></i
                                            ><i className="bx bx-chevron-up icon-close"></i
                                            ></a>
                                        <div
                                            id="accordion-list-3"
                                            className="collapse"
                                            data-parent=".accordion-list"
                                        >
                                            <p>
                                                Eleifend mi in nulla posuere sollicitudin aliquam
                                                ultrices sagittis orci. Faucibus pulvinar elementum
                                                integer enim. Sem nulla pharetra diam sit amet nisl
                                                suscipit. Rutrum tellus pellentesque eu tincidunt.
                                                Lectus urna duis convallis convallis tellus. Urna
                                                molestie at elementum eu facilisis sed odio morbi quis
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                            style={{backgroundImage: "url('assets/img/why-us.png')"}}
                            data-aos="zoom-in"
                            data-aos-delay="150"
                        >
                            &nbsp;
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div
                            className="col-lg-6 d-flex align-items-center"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <img src="assets/img/skills.png" className="img-fluid" alt=""/>
                        </div>
                        <div
                            className="col-lg-6 pt-4 pt-lg-0 content"
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <h3>
                                Voluptatem dignissimos provident quasi corporis voluptates
                            </h3>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="skills-content">
                                <div className="progress">
                                    <span className="skill">HTML <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">CSS <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">JavaScript <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">Photoshop <i className="val">55%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Solutions</h2>
                        <p>
                            We offer you different solutions on the most famous platforms.
                        </p>
                    </div>

                    <div className="row">
                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="fab fa-shopify"></i>
                                </div>
                                <h4><a href="">Shopify Apps</a></h4>
                                <p>
                                    Voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias excepturi
                                </p>
                                <Link
                                    to="solutions/shopify-apps/"
                                    className="mt-2 float-right"
                                >Show all <i className="ri-arrow-right-line"></i
                                ></Link>
                            </div>
                        </div>

                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="">Wordpress plugins</a></h4>
                                <p>
                                    Voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias excepturi
                                </p>
                                <a
                                    href="solutions/wordpress-plugins/explore.html"
                                    className="mt-2 float-right"
                                >Show all <i className="ri-arrow-right-line"></i
                                ></a>
                            </div>
                        </div>

                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4><a href="">Google Chrome Extensions</a></h4>
                                <p>
                                    Voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias excepturi
                                </p>
                                <a
                                    href="solutions/chrome-extensions/explore.html"
                                    className="mt-2 float-right"
                                >Show all <i className="ri-arrow-right-line"></i
                                ></a>
                            </div>
                        </div>

                        <div
                            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-layer"></i></div>
                                <h4><a href="">Full E-commerce Plateform</a></h4>
                                <p>
                                    Voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias excepturi
                                </p>
                                <a
                                    href="solutions/e-commerce-platform/explore.html"
                                    className="mt-2 float-right"
                                >Show all <i className="ri-arrow-right-line"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-left">
                            <h3>change the way you work</h3>
                            <p>
                                Start a new way of managing your content, join our + 8k
                                customers, , and reach your sales goals.
                            </p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <a className="cta-btn align-middle" href="#"
                            >Browse Our Applications</a
                            >
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                            ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                            quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>


                </div>
            </section>
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                </div>
            </section>

            <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Pricing</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                            ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                            quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>

                </div>
            </section>

            <section id="faq" className="faq section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                            ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                            quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>

                    <div className="faq-list">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100">
                                <i className="bx bx-help-circle icon-help"></i>
                                <a data-toggle="collapse" className="collapse" href="#faq-list-1"
                                >Non consectetur a erat nam at lectus urna duis?
                                    <i className="bx bx-chevron-down icon-show"></i
                                    ><i className="bx bx-chevron-up icon-close"></i
                                    ></a>
                                <div
                                    id="faq-list-1"
                                    className="collapse show"
                                    data-parent=".faq-list"
                                >
                                    <p>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                        volutpat lacus laoreet non curabitur gravida. Venenatis
                                        lectus magna fringilla urna porttitor rhoncus dolor purus
                                        non.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="200">
                                <i className="bx bx-help-circle icon-help"></i>
                                <a data-toggle="collapse" href="#faq-list-2" className="collapsed"
                                >Feugiat scelerisque varius morbi enim nunc?
                                    <i className="bx bx-chevron-down icon-show"></i
                                    ><i className="bx bx-chevron-up icon-close"></i
                                    ></a>
                                <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque
                                        habitant morbi. Id interdum velit laoreet id donec ultrices.
                                        Fringilla phasellus faucibus scelerisque eleifend donec
                                        pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                                        ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="300">
                                <i className="bx bx-help-circle icon-help"></i>
                                <a data-toggle="collapse" href="#faq-list-3" className="collapsed"
                                >Dolor sit amet consectetur adipiscing elit?
                                    <i className="bx bx-chevron-down icon-show"></i
                                    ><i className="bx bx-chevron-up icon-close"></i
                                    ></a>
                                <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                                        sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                                        nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                                        pellentesque eu tincidunt. Lectus urna duis convallis
                                        convallis tellus. Urna molestie at elementum eu facilisis
                                        sed odio morbi quis
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="400">
                                <i className="bx bx-help-circle icon-help"></i>
                                <a data-toggle="collapse" href="#faq-list-4" className="collapsed"
                                >Tempus quam pellentesque nec nam aliquam sem et tortor
                                    consequat? <i className="bx bx-chevron-down icon-show"></i
                                    ><i className="bx bx-chevron-up icon-close"></i
                                    ></a>
                                <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo.
                                        Dignissim suspendisse in est ante in. Nunc vel risus commodo
                                        viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                                        bibendum est. Purus gravida quis blandit turpis cursus in.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="500">
                                <i className="bx bx-help-circle icon-help"></i>
                                <a data-toggle="collapse" href="#faq-list-5" className="collapsed"
                                >Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                                    turpis nunc eget lorem dolor?
                                    <i className="bx bx-chevron-down icon-show"></i
                                    ><i className="bx bx-chevron-up icon-close"></i
                                    ></a>
                                <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Laoreet sit amet cursus sit amet dictum sit amet justo.
                                        Mauris vitae ultricies leo integer malesuada nunc vel.
                                        Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                                        eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                                        eu scelerisque.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                            ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                            quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="icofont-google-map"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <i className="icofont-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>contact@paginale.com</p>
                                </div>

                                <div className="phone">
                                    <i className="icofont-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                    frameBorder="0"
                                    style={{"border": 0, width: "100%", height: "290px"}}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form
                                action="forms/contact.php"
                                method="post"
                                role="form"
                                className="php-email-form"
                            >
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                        />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            data-rule="email"
                                            data-msg="Please enter a valid email"
                                        />
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        id="subject"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 8 chars of subject"
                                    />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={10}
                                        data-rule="required"
                                        data-msg="Please write something for us"
                                    ></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>;
};
