var React = require('react');

export default class ComponentBodyIndex extends React.Component{
    constructor(){
        super();//调用基类的所有的初始化方法
        // 初始化赋值
        this.state = {
            userName: "尼大人"
        };
    }

    // componentWillMount(){
    //     // 组件将要加载的时候
    //     console.log("boydIndex - componentWillMount");
    // }

    render(){
        // 更改 state 的时候
        // setTimeout(()=>{
            this.setState({
                userName: this.props.userName
            })
        // },2000);
        return(
            <div>
                <h1>这里是body部分</h1>
                {/*<p>hahah</p>*/}
                <p>{this.state.userName} {this.props.userid}</p>
            </div>
        );
    }

    // componentDidMount(){
    //     // 组将加载完毕
    //     console.log('bodyIdex - componentDidMount');
    // }
}
