/**
 * 首页
 * @authors ZHY
 * @date 2016-01-05
 */
import React from 'react';
import Mission from './Mission.jsx';

class PagePlay extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PagePlay';  
    }
    render() {
        let show = (this.props.loaded && this.props.current )? 'ui-page ui-page-play Jpage Jpageshow' : 'ui-page ui-page-play Jpage';
        let covers = ['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10'],
            pics   = ['b1','b2','b3','b4','b5','b6','b7','b8','g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12'];
        return (  
            <div>
                <div className={show} id="pagePlay">
                    <h3 className="m-playheading sprite">根据TA的自拍照猜猜哪个是TA的证件照？</h3>
                    <Mission startGame={this.props.startGame} 
                        gameover={this.props.gameover} current={this.props.current} 
                        switchPage={this.props.switchPage} timer={this.props.timer} 
                        nextMission = {this.props.nextMission}
                        covers={covers} pics={pics} mission={this.props.mission}></Mission> 
                    
                    <div className="m-failmask" id="J_failMask">
                        <p className="m-failtitle" id="J_failTitle"></p>
                        <p className="m-failtext" id="J_failText"></p>
                        <span className="m-restart J_btn" id="J_btnRestart">再来一次</span>
                        <span className="m-share J_btnShare J_btn">去炫耀</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PagePlay;

