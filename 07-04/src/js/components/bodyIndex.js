var React = require('react');

export default class ComponentBodyIndex extends React.Component{
    render(){
        var userName = "尼大人";
        var boolInput = true;
        return(
            <div>
                <h1>这里是body部分</h1>
                <p>{ userName ? "用户名: " + userName : "用户未登录"}</p>
                <p><input type="button" value="默认按钮" disabled={boolInput}/></p>
            </div>
        );
    }
}
