import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'
import Header from '../component/header'
import Index from './index'
import About from './about'
import reducers from '../reducers/record.js'
import '../../css/main.css'


class App extends React.Component{ 
    constructor(props) { 
      super(props);
      this.state = { }
    }
    componentDidMount() {
      
    }


    switchPage(page){
      location.href = page;
    }

    render(){
        return (
            <div>
                <div className="bg-body"></div>
                <div className="wrapper">
                  <Header />
                  <Index />
                </div>
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


