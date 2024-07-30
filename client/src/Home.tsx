import * as React from 'react';
import './Home.css';
import { useState, useEffect, useRef } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import './App.css'; // Ensure your CSS is imported

const AboutSection: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                GLOBE({
                    el: vantaRef.current!,
                    THREE, // Ensure THREE is provided
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0xE8E8E8,
                    color2: 0xE8E8E8,
                    size: 0.50,
                    backgroundColor: 0x0
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <section id="about" ref={vantaRef}>
            <div className="container">
                <h2 className="section-title load-hidden">About me</h2>
                <div className="row about-wrapper">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__info load-hidden">
                            <p className="about-wrapper__info-text">
                                Description 1
                            </p>
                            <p className="about-wrapper__info-text">
                                More Description
                            </p>
                            {/*Skills*/}

                            <div className="skills-card">
                                <p>
                                    <span>Technologies</span>
                                    <span className="extra-info">Python, Java, Linux, JavaScript, React, React Native, Bootstrap, NodeJS, Express</span>
                                </p>
                                <p>
                                    <span>Programming Languages</span>
                                    <span className="extra-info">Python, Java, JavaScript, HTML, CSS</span>

                                </p>
                                <p>
                                    <span>Databases</span>
                                    <span className="extra-info">MySQL, MongoDB, Microsoft SQL Server</span>
                                </p>
                            </div>

                            <span className="d-flex mt-3">
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className="cta-btn cta-btn--resume"
                                    href="Images/resume.pdf"
                                >
                                    View Resume
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const App: React.FC = () => {
    return (
        <>
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" type="image/png" href="assets/favicon.png"/>

                <title>Nikilesh Madala</title>
                <meta name="keywords" content="[username], [name], skill"/>
                <meta name="description" content="Nikilesh Madala"/>

                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <link rel="stylesheet" href="Home.css" />
                <script
                    defer
                    src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
                ></script>
                <script async defer src="https://buttons.github.io/buttons.js"></script>
            </head>

            <body>
            <div id="top"></div>

            <section id="hero" className="jumbotron">
                <div className="hero-container">
                    <h1 className="hero-title load-hidden">
                        Hi, my name is <span className="text-color-main">Nikilesh Madala</span>
                        <br />
                    </h1>
                    <p className="hero-cta load-hidden">
                        <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
                            Know more
                        </a>
                    </p>
                </div>
            </section>

            <AboutSection />
/*Projects*/
            <section id="projects">
                <div className="container">
                    <div className="project-wrapper">
                        <h2 className="section-title dark-blue-text">Projects</h2>

                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="project-wrapper__text load-hidden">
                                    <h3 className="project-wrapper__text-title">Project Title 0</h3>
                                    <div>
                                        <p className="mb-4">
                                            Project 0 Description
                                        </p>
                                    </div>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="cta-btn cta-btn--hero"
                                        href="#!"
                                    >
                                        See Live
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="cta-btn text-color-sourcecode"
                                        href="#!"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <div className="project-wrapper__image load-hidden">
                                    <a rel="noreferrer" href="#!" target="_blank">
                                        <div
                                            data-tilt
                                            data-tilt-max="4"
                                            data-tilt-glare="true"
                                            data-tilt-max-glare="0.5"
                                            className="thumbnail rounded js-tilt"
                                        >
                                            <img
                                                alt="Project Image"
                                                className="img-fluid"
                                                src="assets/project.jpg"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="project-wrapper__text load-hidden">
                                    <h3 className="project-wrapper__text-title">Project Title 1</h3>
                                    <div>
                                        <p className="mb-4">
                                            Project 1 Description
                                        </p>
                                    </div>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="cta-btn cta-btn--hero"
                                        href="#!"
                                    >
                                        See Live
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="cta-btn text-color-sourcecode"
                                        href="#!"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <div className="project-wrapper__image load-hidden">
                                    <a rel="noreferrer" href="#!" target="_blank">
                                        <div
                                            data-tilt
                                            data-tilt-max="4"
                                            data-tilt-glare="true"
                                            data-tilt-max-glare="0.5"
                                            className="thumbnail rounded js-tilt"
                                        >
                                            <img
                                                alt="Project Image"
                                                className="img-fluid"
                                                src="assets/project.jpg"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="project-wrapper__text load-hidden">
                                    <h3 className="project-wrapper__text-title">Project Title 2</h3>
                                    <div>
                                        <p className="mb-4">
                                            Project 2 Description
                                        </p>
                                    </div>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="cta-btn cta-btn--hero"
                                        href="#!"
                                    >
                                        See Live
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="cta-btn text-color-sourcecode"
                                        href="#!"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <div className="project-wrapper__image load-hidden">
                                    <a rel="noreferrer" href="#!" target="_blank">
                                        <div
                                            data-tilt
                                            data-tilt-max="4"
                                            data-tilt-glare="true"
                                            data-tilt-max-glare="0.5"
                                            className="thumbnail rounded js-tilt"
                                        >
                                            <img
                                                alt="Project Image"
                                                className="img-fluid"
                                                src="assets/project.jpg"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
{/*Footer*/}
            <section id="contact">
                <div className="container">
                    <a rel="noreferrer" href="#top" className="back-to-top">
                        <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                    </a>
                    <div className="contact-wrapper load-hidden">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--resume"
                            href="mailto:nikileshm@vt.edu"
                        >
                            Contact me
                        </a>
                    </div>
                    <div className="container">
                        <div className="social-links">
                            <a rel="noreferrer" href="#!" target="_blank">
                                <i className="fa fa-twitter fa-inverse"></i>
                            </a>
                            <a rel="noreferrer" href="#!" target="_blank">
                                <i className="fa fa-linkedin fa-inverse"></i>
                            </a>
                            <a rel="noreferrer" href="#!" target="_blank">
                                <i className="fa fa-github fa-inverse"></i>
                            </a>
                        </div>
                        <p className="footer__text">© 2023 Nikilesh Madala</p>
                    </div>
                </div>
            </section>
            <script defer type="module" src="index.js"></script>
            </body>
        </>
    );
};

export default App;