import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Navigation',
            subTitle: 'Main menu',
            showNav: 'show',
        }
    }
    showNav = () => {
        this.setState({showNav: 'hide'});
    }
    render() {
        let nav = this.props.nav;

        return (
        <nav className="nav">
            <button type="button" className="button" onClick={this.showNav}>Show menu</button>
            <h1>{this.state.title}</h1>
            <h2>{this.state.subTitle}</h2>
            <p>{this.state.showNav}</p>
            <ul>
                {Object.keys(nav).map((elem, index) => { 
                    return (
                        <li key={index}>
                            <a href={nav[elem]}>{elem}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        );
    }
}

export default Nav;
