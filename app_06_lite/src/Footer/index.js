import React from 'react';

import "./Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <footer className="section footer-classic context-dark bg-image" style={{background: "#2d4366", color: "#fff"}}>
                <hr />
                <p>Copyright &copy;</p>
            </footer>
        )  
    }
}

export default Footer;