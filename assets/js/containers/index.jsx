import React from 'react';
import Micro from '../component/micro.jsx'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Index';
    }
    switchPage(page){
       
    }
    render() {
        return <div>
            <Micro />
        </div>;
    }
}




export default Index;
