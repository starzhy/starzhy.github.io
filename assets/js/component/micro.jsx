/**
 * micro.js
 * @authors ZHY
 * @date 2016-01-20
 */
import React from 'react';

class Micro extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Micro';
        this.state ={
            hover:false
        }
    }
    handleTouchStart(){
        this.setState({
            hover:true
        })
    }
    handleTouchEnd(){
        this.setState({
            hover:false
        })
    }
    render() {
        return <div>
            <div className= {this.state.hover ? 'micro modal micro-hover' :'micro modal'} 
                onTouchStart= {this.handleTouchStart.bind(this)}
                onTouchEnd= {this.handleTouchEnd.bind(this)}
            >
                <div className="micro-bg"></div>
                <i className="ficon ficon-micro"></i>
            </div>
        </div>;
    }
}

export default Micro;

