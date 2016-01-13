/**
 * 
 * @authors ZHY
 * @date 2016-01-06
 */

import React from 'react';

class Pics extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Pics';
        this.state = {
            selected:this.props.covers[this.props.mission-1],
            pics:this.props.pics,
            covers:this.props.covers,
        }
    }
    componentWillMount() {
        //一组数据中随机选出4张
        let out = this.generateData();
        this.setState({
            pics:out
        });
    }



    handleClick(){
        this.props.nextMission();
        let mission = this.state.mission+1,
            out = this.generateData(mission);
        this.setState({
            pics:out,
            mission:mission,
            selected:this.state.covers[mission-1]
        });
        
    }

    generateData(m){
        let pics   = this.props.pics,
            covers = this.state.covers, //这个数据是固定的，所有题目的封面
            out  = [],
            num  = 4,
            mission  = m || 1;
        
        let selected = covers[mission-1];
        out.push(selected);
        pics.remove(selected);
        
        pics.sort(function(){ return 0.5 - Math.random() });
        out = out.concat(pics.slice(0,4))
        out.sort(function(){ return 0.5 - Math.random() });
        return out;
    } 

    render() {
        var data    = this.state.pics,
            itemArr = [];
 
        data.forEach((value,i) =>{
            var selected = this.state.selected == value ? 'selected' : '';
            itemArr.push(<Item selected={selected} pic={value} handleClick={this.handleClick.bind(this)}></Item>)
        })
        
        return (
            <div className="m-select-box" id="J_selectBox">
                <ul className="m-select-list J_select clearfix J_selectEnter">
                    <li><p className="mis">{this.props.mission}</p></li> 
                    {itemArr}
                </ul>
            </div>

        );
    }
}

class Item extends React.Component{
    constructor(props){
        super(props);
        this.displayName = 'Item';
    }
    render(){
        let pic      = this.props.pic,
            selected = this.props.selected;
        //var imgHtml =;
        
        return (

            <li data-status={selected} onClick={this.props.handleClick}>
                <div className="img">
                    { <img src={"view/images/photo_id/"+pic+".jpg"}/> }
                </div>
            </li>
            
        )
    }
}




export default Pics;
