import React from 'react';


const MainNavigation = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">

                    <div className="buttons">
                        <div className="button is-primary">
                            <strong>UBER</strong>
                        </div>

                    </div>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true">Tex1</span>
                    <span aria-hidden="true">Tex2</span>
                    <span aria-hidden="true">Tex3</span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Documentation
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider"/>
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default MainNavigation;
