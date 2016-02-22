import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    handleTouch(){
        alert(2)
    }
    render() {
        return <div>
            <header className="header">
                <h1 className="logo" onTouchStart={this.handleTouch}>那个码农</h1>
            </header>
        </div>;
    }
}

export default Header;

