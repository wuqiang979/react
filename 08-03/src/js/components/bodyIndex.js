var React = require('react');
import BodyChild from './bodychild';

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
    changeUserInfo(){
        this.setState({age:50})
    }

    handleChildValueChang(event){
      this.setState({age:event.target.value})
    }

    render(){
        // 更改 state 的时候
        // setTimeout(()=>{
            // this.setState({
            //     userName: this.props.userName
            // })
        // },2000);
        return(
            <div>
                <h1>这里是body部分</h1>
                {/*<p>hahah</p>*/}
                <p>{this.state.userName} {this.props.userid}</p>
                <p>age:{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
                <BodyChild handleChildValueChang={this.handleChildValueChang.bind(this)}/>
            </div>
        );
    }

    // componentDidMount(){
    //     // 组将加载完毕
    //     console.log('bodyIdex - componentDidMount');
    // }
}
