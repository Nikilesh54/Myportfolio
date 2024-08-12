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
                    color: 0x9f9f9f,
                    color2: 0x9f9f9f,
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
            <div className="Polygon-Style">
            <div className="container">
                <h2 className="section-title load-hidden">About me</h2>
                <div className="row about-wrapper">
                    <div className="about-wrapper__info load-hidden">
                        <p className="about-info-text">👋 Hey there! I’m Nikilesh – a tech enthusiast👨🏾‍💻 with a
                            serious love for coding and a borderline addiction to caffeine ☕. While I’m physically based
                            in Virginia📍, my mind often wanders to a futuristic tech universe📡 where everything is
                            running smoothly on Python and JavaScript.
                            I earned my bachelor's🎓 in Computer Science💻 and spent some time as a full-stack engineer at
                            Cognizant, diving deep into SQL databases, AWS, and everything web development. Whether it’s
                            building a sleek website with HTML, CSS, and React, or fine-tuning the backend, I’m all in.

                        </p>
                        <p className="about-info-text">
                            Currently, pursuing my master’s at Virginia Tech
                            <img src="/Images/VT.png " alt="VT Logo" className="about-inline-logo"/>,
                            where I’m expanding my tech skills and exploring new frontiers in coding<img src="/Images/Semicolon.png " alt="Semicolon Logo" className="about-inline-logo"/>
                        </p>
                        <p className="about-info-text">When I’m not busy coding, you can usually find me on X
                            tweeting or scrolling through Reddit, keeping up everything. I have a knack for creating
                            problems in my life🙃 and solving them in code🙂 – and I tend to crack jokes while I’m at it, so
                            expect some laughs along the way.</p>
                        <p className="about-info-text">I’m always excited to connect with fellow tech enthusiasts, so
                            feel free to reach out on LinkedIn or drop me a line at "nikileshm@vt.edu"📧. Let’s chat
                            about code, cloud, or anything tech-related – I’m all ears! 🚀</p>
                        {/* Skills */}
                        <div className="skills-card">
                            <p>
                                <span className="Skill">Technologies</span>
                                <span className="extra-info">
                                    <img src="/Images/LogosFinal/AWS.png" alt="AWS" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Microsoft Azure.png" alt="Azure"
                                         className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Powerbi.png" alt="Powerbi" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Snowflake.png" alt="Snowflake" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Figma.png" alt="Figma" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Git.png" alt="Git" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/GitHub.png" alt="GitHub" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/BitBucket.png" alt="BitBucket" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Postman.png" alt="Postman" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Docker.png" alt="Docker" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Kubernetes.png" alt="Kubernetes"
                                         className="skill-logo"/>
                                </span>
                            </p>
                            <p>
                                <span className="Skill">Languages</span>
                                <span className="extra-info">
                                    <img src="/Images/LogosFinal/Python.png" alt="Python" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Java.png" alt="Java" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/JavaScript.png" alt="JavaScript"
                                         className="skill-logo"/>
                                    <img src="/Images/LogosFinal/C++.png" alt="C++" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Typescript.png" alt="Typescript"
                                         className="skill-logo"/>
                                    <img src="/Images/LogosFinal/SQL.png" alt="SQL" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Linux.png" alt="Linux" className="skill-logo"/>
                                </span>
                            </p>
                            <p>
                                <span className="Skill">Databases</span>
                                <span className="extra-info">
                                    <img src="/Images/LogosFinal/MySQL.png" alt="MySQL" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/PostgreSQL.png" alt="PostgreSQL"
                                         className="skill-logo"/>
                                    <img src="/Images/LogosFinal/mongoDB.png" alt="MongoDB" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/SQLServer.png" alt="SQLServer" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/OracleDB.png" alt="Oracle" className="skill-logo"/>
                                </span>
                            </p>
                            <p>
                                <span className="Skill">Frameworks</span>
                                <span className="extra-info">
                                    <img src="/Images/LogosFinal/React.png" alt="React" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/NodeJS.png" alt="Nodejs" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/express.png" alt="Express" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Redux.png" alt="Redux" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/jQuery.png" alt="jQuery" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Bootstrap.png" alt="Bootstrap" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/HTML.png" alt="HTML" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/CSS.png" alt="CSS" className="skill-logo"/>
                                </span>
                            </p>
                        </div>
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
        </section>

    );
};

const CursorEffect: React.FC = () => {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor');
        document.body.appendChild(cursor);

        const moveCursor = (e: MouseEvent) => {
            requestAnimationFrame(() => {
                cursor.style.left = `${e.clientX + window.scrollX}px`;
                cursor.style.top = `${e.clientY + window.scrollY}px`;
            });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeChild(cursor);
        };
    }, []);

    return null;
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
                <link rel="stylesheet" href="Home.css"/>
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
                        <br/>
                    </h1>
                    <p className="hero-cta load-hidden">
                        <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
                            Know more
                        </a>
                    </p>
                </div>
            </section>

            <CursorEffect /> {/* Add the CursorEffect component */}
            <AboutSection />
            {/*Projects*/}
            <section id="projects">
                <div className="container">
                    <div className="project-wrapper">
                        <h2 className="section-title dark-blue-text">Projects</h2>
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
                            className="cta-btn cta-btn--contact-me"
                            href="mailto:nikileshm@vt.edu"
                        >
                            Contact me
                        </a>
                    </div>
                    <div className="container">
                        <div className="social-links">
                            <a rel="noreferrer" href="https://x.com/MN040601" target="_blank">
                                <i className="fa fa-twitter fa-inverse"></i>
                            </a>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/nikileshmadala/" target="_blank">
                                <i className="fa fa-linkedin fa-inverse"></i>
                            </a>
                            <a rel="noreferrer" href="https://github.com/Nikilesh54" target="_blank">
                                <i className="fa fa-github fa-inverse"></i>
                            </a>
                        </div>
                        <p className="footer__text">© 2023 Nikilesh Madala</p>
                        <p className="footer__text"> Design and Intellectual property (IP) of Nikilesh Madala. Reusing without permission in any level is not allowed.</p>
                    </div>
                </div>
            </section>
            <script defer type="module" src="index.js"></script>
            </body>
        </>
    );
};

export default App;