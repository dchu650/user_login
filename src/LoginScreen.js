import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from './Register';
class LoginScreen extends Component{
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:'',
			loginScreen:[],
			loginMessage:'',
			buttonLabel:'Register',
			isLogin:true
		}
	}

	
handleClick(event){
	console.log("event :" + event);
	var loginMessage;
	if(this.state.isLogin){
		var loginScreen=[];
		loginScreen.push(<Register parentContext={this}/>);
		loginMessage="Already registered. Please login.";
		this.setState({
			loginScreen:loginScreen,
			loginMessage:loginMessage,
			buttonLabel:"Login",
			isLogin:false
		});
	}
	else{
		var loginScreen=[];
		loginScreen.push(<Login parentContext={this}/>);
		loginMessage="Not yet registered. Please register!";
		this.setState({
			loginScreen:loginScreen,
			loginMessage:loginMessage,
			buttonLabel:"Register",
			isLogin:true
		});
	}
}

	componentWillMount(){
		var loginScreen=[];
		loginScreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
		var loginMessage="You're not registered. Please register now!";
		this.setState({
			loginScreen: loginScreen,
			loginMessage: loginMessage
		});
	}
	render(){
		return(
			<div className="loginScreen">
				{this.state.loginScreen}
				<div>
					{this.state.loginMessage}
					<MuiThemeProvider>
						<div>
							<RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event)=>this.handleClick(event)}/>
						</div>
					</MuiThemeProvider>
				</div>
			</div>
		);
	}
}
const style={
	margin: 15,
};
export default LoginScreen;
