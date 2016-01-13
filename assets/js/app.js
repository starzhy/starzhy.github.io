import React from 'react'
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'
import Loading from './loading'
import PageIndex from './PageIndex'
import PagePlay from './PagePlay'
import PageResult from './PageResult'

  
var handleTimer;
class App extends React.Component{
    constructor(props) { 
      super(props);
      var hash =  window.location.hash.substr(1);
      //根据hash来设置active
      this.state = {
        route: window.location.hash.substr(1),
        loaded:false,
        active:'pageIndex',
        mission:1,
        timer:10,
        gameover:false,
        total:10
      }
    }
    componentDidMount() {
      window.addEventListener('hashchange', () => {
        this.setState({
          route: window.location.hash.substr(1)
        });
      })
    }

    handlePageLoaded(){
      this.setState({
        loaded:true
      });
    }

    startGame(){
      //数据重置
      //location.hash ='#/play'
      this.setState({
        active:'pagePlay',
        mission:1,
        timer:10,
        gameover:false
      });

      this.timerFunction();
      
    }
    nextMission(){
      var mission = this.state.mission+1;
      if(mission>this.state.total){
          this.setState({
              mission:this.state.total,
          });

          this.switchPage('pageResult');
          return false;
      }
      this.setState({
          mission:mission,
          timer:10
      });
    }

    timerFunction(){
      handleTimer = setInterval(()=>{
          var timer = this.state.timer-1;
          if(timer<0){
              //游戏结束
              this.setState({
                  gameover:true
              })
              clearInterval(handleTimer);
              return;
          }
          this.setState({
              timer:timer
          })
      },1000)
    }

    switchPage(page){
      this.setState({
        active:'pageResult',
        mission:1,
        timer:10
      });

    }

    render(){
        return (
            <div className="ui-section">
              <Loading  updatePageLoaded={this.handlePageLoaded.bind(this)}/>
              <PageIndex 
                loaded  = {this.state.loaded} 
                current = {this.state.active=='pageIndex' ? true : false}
                startGame = {this.startGame.bind(this)}
              >
              </PageIndex>


              <PagePlay 
                loaded  = {this.state.loaded} 
                current = {this.state.active=='pagePlay' ? true : false}
                startGame = {this.startGame.bind(this)} switchPage={this.switchPage.bind(this)}
                timer = {this.state.timer} gameover={this.state.gameover}
                timerFunction = {this.timerFunction}
                nextMission ={this.nextMission.bind(this)}
                mission = {this.state.mission}
              >
              </PagePlay>
              <PageResult current = {this.state.active=='pageResult' ? true : false}
                startGame = {this.startGame.bind(this)}
              >
              </PageResult> 
            </div>
          )
    }
}


const Index = React.createClass({
    render() { 
      return (
        <div>
          <h2>Index!</h2>
        </div>
      )
    }
})


class Play extends React.Component {
  render() {
    return (
      <div>
        <h2>Play</h2>
        {this.props.children}
      </div>
    )
  }
}


class Result extends React.Component {
  render() {
    return (
      <div>
        <h3>Result</h3>
      </div>
    )
  }
}


React.render((
  // <Router history={browserHistory}>
  <Router>
    <Route path="/" component={App}>
      <Route path="/index" component={Index}></Route>
      <Route path="/play" component={Play}></Route>
      <Route path="/result" component={Result}></Route>
    </Route>
  </Router>
), document.getElementById('container'))


