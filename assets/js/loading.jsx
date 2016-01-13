import React from 'react';
import * as H5 from './h5.js';
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: ''};
  }
  componentDidMount(){
    const imgs = [
      'body.png',
      'btns.png',
      'clock.png',
      'heading.png',
      'logo.png',
      'mission.png',
      'share.jpg',
      'sprite.png'
    ];
    let imgArr = imgs.map( item => 'view/images/'+item);

    H5.func.preLoadImg(imgArr,()=>{
      //移除loading
      this.setState({loaded:true});
      this.props.updatePageLoaded();
    });
  }


  render() {
    var blocked = this.state.loaded ? 'none' : 'block';
    return (
      <div>
        <div className="ui-pageloading" style={{display:blocked}} id="pageLoading">
            <div className="pageloading-inner">
                <div className="spinner"></div>
            </div>
            <p className="pageloading-text">··<em>玩命加载中</em>··</p>
        </div>
      </div>
    );
  }
}