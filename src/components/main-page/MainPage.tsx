import React, { Component, createRef,  useContext } from 'react'
import { LangContext } from '../context/Lang';
import './main.css'

interface Props {
}
interface State {
    userEmail: string
}

export default class MainPage extends Component<Props, State> {
    
    constructor(props: Props) {
        super(props);
        this.state = {
            userEmail: ''
        };

        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    } 

    emailInput = React.createRef<HTMLInputElement>();

    componentDidMount() {
        if(this.emailInput.current){
            this.emailInput.current.focus();
        }
    }

    handleEmailChange(e: any) {
        this.setState({
            userEmail: e.target.value
        });
    }

    handleSubmit(){
        if(!this.state.userEmail.includes("@"))
            alert("Email address is not valid")
        else 
            alert("Thank you for subscription")
      }

    render() {
        return (
        <>
            <div className="email-subscription">
                <h1>Want more Food52?</h1>
                <p>Our best tips for eating thoughtfully and living joinfully, right to your inbox.</p>
                    
                <div >
                    <input type="text" className="search-input" onChange={this.handleEmailChange} id="search-input" ref={this.emailInput} placeholder="Search recipes and more..." />
                    <span id="subscribe-button-span"><button id="subscribe-button-home"onClick={this.handleSubmit}>Subscrible</button></span>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&copy;ixid=eyJhcHBfaWQiOjEyMDd9&copy;auto=format&copy;fit=crop&copy;w=500&copy;q=60"/>
            </div>
        
        </>
        )
    }
}

