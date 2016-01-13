/**
 * 
 * @authors ZHY
 * @date 2016-01-08
 */
import React from 'react';

class PageResult extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PageResult';
        this.state={
            cls:'ui-page ui-page-result Jpage'
        }
    }
    componentWillReceiveProps(){
        this.state={
            cls:'ui-page ui-page-result Jpage Jpageshow'
        }
    }
    render() {
        return <div>
            <div className={this.state.cls} id="pageResult"></div>
        </div>;
    }
}

export default PageResult;

