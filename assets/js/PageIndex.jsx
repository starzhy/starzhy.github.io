/**
 * 首页
 * @authors ZHY
 * @date 2016-01-05
 */
import React from 'react';

class PageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PageIndex';
    }
    render() {
        var show = (this.props.loaded && this.props.current )? 'ui-page ui-page-index Jpage Jpageshow' : 'ui-page ui-page-index Jpage';
        return (
            <div>
                <div className={show} id="pageIndex">
                    <h1 className="m-logo sprite">眼力大挑战</h1>
                    <p className="m-heading sprite">美图手机自拍VS证件照</p>
                    <div className="m-figure sprite"></div>
                    <p className="m-tips sprite">根据TA的自拍照猜猜哪个是TA的证件照？</p>
                    <span className="m-start J_btn" id="btnStart" onClick={this.props.startGame}>开始挑战</span>
                </div>
            </div>
        );
    }
}

export default PageIndex;

