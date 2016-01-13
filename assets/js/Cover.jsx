/**
 * 
 * @authors ZHY
 * @date 2016-01-06
 */

import React from 'react';

class Cover extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Cover';
    }
    render() {
        var data    = this.props.covers,
            covers  = [];

        data.forEach((value,i) =>{

            covers.push(<Item mission={this.props.mission} keyIndex={i} cover={value}></Item>)
        })
        

        return (
            <div className="m-cover-box" id="J_coverBox">
                <ul className="m-cover-list clearfix" id="J_coverList" style={{WebkitTransform:'translateX(-'+(this.props.mission-1)*8.5+'rem)'}}>
                   {covers}
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
        let cover   = this.props.cover,
            mission = this.props.mission,
            keyIndex= this.props.keyIndex;
        
        return (

            <li>
                {
                    (keyIndex<mission) ? <img src={"view/images/photo_cover/"+cover+"_cover.jpg"}/> : <img src="view/images/config/transparent.gif"  data-src={"view/images/photo_cover/"+cover+"_cover.jpg"}/>
                }
            </li>
            
        )
    }
}




export default Cover;
