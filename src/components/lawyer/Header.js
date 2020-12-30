import React from 'react';

export default ({ title, networks }) => (
    <>
        <div className="container-pad social-networks row-csm">
            <SocialNetworks networks={networks} />
        </div>

        <div className="container-pad header row-csm">
            <div className="title"><a href="#">{title}</a></div>
            <div className="item-end">NUMBER</div>
        </div>

        <div className="container-pad borders">
            <Navbar>
                <NavbarLink href='/lawyer'>Home</NavbarLink>
                <NavbarLink>About</NavbarLink>
                <NavbarLink>People</NavbarLink>
                <NavbarLink>News</NavbarLink>
                <NavbarLink>Expertise</NavbarLink>
            </Navbar>
        </div>
    </>
);

export const SocialNetworks = ({ networks }) => {
    return networks.map((network) =>
        <a key={network.link} className="social-network" href={network.link}>
            <img className="social-network-img"
                src={!!network.image.childImageSharp ? network.image.childImageSharp.fluid.src : network.image} />
        </a>)
};

export const Navbar = (props) => {
    return (
        <div className="navbar-csm row-csm">{props.children}</div>
    )
};

export const NavbarLink = ({ children, href = '/' }) => {
    return (
        <div className={`${window.location.pathname === href ? "selected" : ""}`}>
            <a href={href}>{children}</a>
        </div>
    )
};