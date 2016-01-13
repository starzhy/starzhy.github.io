/**
 * 
 * @authors ZHY
 * @date 2016-01-06
 */
import React from 'react';
import Cover from './Cover.jsx';
import Pics  from './Pics.jsx';
 
class Mission extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Mission';
        this.state = {
            mission:this.props.mission,
            total:10,
            timer:this.props.timer,
            gameover:false
        }
    }
    componentWillReceiveProps(){
        this.setState({
            timer:this.props.timer,
            mission:this.props.mission
        })
        
    }
    componentDidMount(){
        
    }
    nextMission(){

        var mission = this.state.mission+1;
        console.log(mission)
        if(mission>this.state.total){
            this.setState({
                mission:this.state.total,
            });

            this.props.switchPage('pageResult');
            return false;
        }
        this.setState({
            mission:mission,
            timer:10
        });
        this.props.nextMission();
    }

    render() {
        
        var show = (this.props.gameover) ? ' show':'';
        
        return (
            <div>
                <Cover covers={this.props.covers}  mission={this.state.mission}></Cover>
                <Pics covers={this.props.covers} nextMission={this.props.nextMission}  mission={this.props.mission} pics={this.props.pics}></Pics>
                <span className="m-timer" id="J_gameTimer">{this.state.timer}</span>
                <div className={"m-failmask"+show} id="J_failMask">
                    <p className="m-failtitle" id="J_failTitle">你只闯过了<span>{this.state.mission-1}</span>关</p>
                    <p className="m-failtext" id="J_failText">基本上是脸盲症患者了</p>
                    <span className="m-restart J_btn" id="J_btnRestart" onClick={this.props.startGame}>再来一次</span>
                </div>
            </div>
        );  
    }
 }
 
 export default Mission;
 

