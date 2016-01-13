import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'
import Index from './index'
import About from './about'

class App extends React.Component{
    constructor(props) { 
      super(props);
      this.state = {
        
      }
    }
    componentDidMount() {
      
    }

    //切换页面
    switchPage(page){
      this.setState({ active:page });
    }

    render(){
        return (
            <div className="wrapper">
              <Index />
            </div>
          )
    }
}


const NoMatch = React.createClass({
    render() { 
      return (
        <div>
          <h2>404</h2>
        </div>
      )
    }
})






ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="index" component={Index}/>
    <Route path="about" component={About}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('container'))


