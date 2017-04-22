var React = require('react');
var ReactDOM = require('react-dom');

import ComponentHeader from './components/header';
import ComponentBodyIndex from './components/bodyIndex';
import ComponentFooter from './components/footer';

class Index extends React.Component{
    componentWillMount(){
        // 组件将要加载的时候
        console.log("Index - componentWillMount");
    }

    render(){
        return(
            <div>
                <ComponentHeader/>
                <ComponentBodyIndex/>
                <ComponentFooter/>
            </div>
        );
    }

    componentDidMount(){
        // 组将加载完毕
        console.log('Idex - componentDidMount');
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('example')
);
