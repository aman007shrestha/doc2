import React from 'react';


function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-'+ props.color}>
            {props.children}
        </div>
    );
}


export default function WelcomeDialog(){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our Spaceacraft!
            </p>
        </FancyBorder>
    );
}
function Contacts(){
    return <div className="Contacts" />;
}
function Chat(){
    return <div className="Chat" />;
}
export function SplitPane(props){
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

export function Spliter(){
    return (
        <SplitPane 
            left={<Contacts />}
            right={<Chat />}
        />
    );
}



function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

export class SignUpDialog extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {login: ''}
    }
    render(){
        return(
            <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Sign me up</button>
            </Dialog>
        );
    }
    handleChange(e){
        this.setState({
            login: e.target.value 
        })
    }
    handleSubmit(){
        alert(`Welcome aboard, ${this.state.login}!`);
    }
} 