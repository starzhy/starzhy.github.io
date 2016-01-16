import React from 'react';
import Header from './component/header'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Index';
    }
    switchPage(page){
       
    }
    render() {
        return <div>
            <div className="bg-body"></div>
            <div className="wrapper"> 
                <Header/>
            </div>
        </div>;
    }
}




export default Index;
