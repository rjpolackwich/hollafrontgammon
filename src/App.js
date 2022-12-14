// <a href="https://www.freepik.com/free-vector/animal-heads-set-flat-style_4643514.htm#query=animal%20avatars&position=49&from_view=keyword">Image by macrovector_official</a> on Freepik
import React, { Component } from 'react';

import { LoginForm } from './Login';
import { OnlinePLayers } from './Lobby';


var src = "https://react.semantic-ui.com/images/avatar/small/rachel.png"; 





class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onlinePlayers: [],
			name: '',
			email: '',
			avatar: '',
		};
	}
    onLogin = (loginInput) => {
        this.setState({ username: loginInput })
    }
    

	
	onThrowChange(event) {
		this.setState({
			selectedThrow: event.target.value
		});
	}

	throwSubmit(event) {
		event.preventDefault();
		console.log(this.state.selectedThrow)
	}
    
    render() {
        const { username } = this.state;
        return (
            <React.Fragment>
                <Navbar color="light" light>
                    <NavbarBrand href="/">Real-time document editor</NavbarBrand>
                </Navbar>
                <div className="container-fluid">
                    {username ? <Lobby/> : <LoginForm onSubmit={this.onLogin.bind(this)}/>}
                </div>
            </React.Fragment>
        );
    }
}

