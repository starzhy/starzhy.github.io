import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return <div>
            <header className="header modal"><h1 className="logo">ZHY.im</h1> <span className="des">coming soon...</span></header>
        </div>;
    }
}

export default Header;

