import React, { Component } from 'react';
import { LangContext } from '../context/Lang';
import style from './main.module.css';

interface Props {
}
interface State {
    userEmail: string
}

export default class MainPage extends Component<Props, State> {
    static contextType = LangContext
    constructor(props: Props) {
        super(props);
        this.state = {
            userEmail: '',
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailInput = React.createRef<HTMLInputElement>();

    componentDidMount() {
        if (this.emailInput.current) {
            this.emailInput.current.focus();
        }
    }

    handleEmailChange(e: any) {
        this.setState({
            userEmail: e.target.value
        });
    }

    handleSubmit() {
        if (!this.state.userEmail.includes("@"))
            alert("Email address is not valid")
        else
            alert("Thank you for subscription")
        this.setState({
            userEmail: '',
        });
    }

    render() {
        return (
            <>
                <div className={style.email_subscription}>
                    <h1 className={style.title} >Want more FOOD52?</h1>
                    <p>Tips for eating thoughtfully and joinfully, right to your inbox.</p>

                    <div >
                        <input type="text" className={style.search_input} onChange={this.handleEmailChange} ref={this.emailInput} placeholder="Search recipes and more..." />
                        <span><button className={style.subscribe_btn_home} onClick={this.handleSubmit}>Subscrible</button></span>
                    </div>
                </div>

                <img className={style.back_img} src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&copy;ixid=eyJhcHBfaWQiOjEyMDd9&copy;auto=format&copy;fit=crop&copy;w=500&copy;q=60" />

            </>
        )
    }
}

