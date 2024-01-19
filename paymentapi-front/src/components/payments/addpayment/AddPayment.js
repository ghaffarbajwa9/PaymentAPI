import { Component } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
class AddPayment extends Component{
    constructor(props){
        super(props);
        // const currentDate =new Date();
        this.state = { 
            amount: '',
            date: Date(),
            user_id: '',
            account_id: '',
            errors: ''
        };
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };
    handleSubmit= async (event)=>{
        event.preventDefault();
        const {amount, date, user_id, account_id} = this.state;
        let payment = {
            amount: amount,
            date: date,
            user_id: user_id,
            account_id: account_id
          }

          axios.post('http://localhost:3000/api/v1/payments',{payment}, {withCredentials:true})
          .then(response => {
            if (response.data.status === 'Payment added') {
            //   this.props.handleAddpayment(response.data)
                this.props.redirect('/payments')
            } else {
              this.setState({
                errors: response.data.errors
              })
            }
          })
          .catch(error => console.log('api errors:', error))
    }
    redirect = () => {
        const navigate = useNavigate();
        // this.props.history.push('/')
        navigate('/payments')
      }
      handleErrors = () => {
        return (
          <div>
            <ul>
            {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
        )
      };
    render(){
        const {amount, date, user_id, account_id} = this.state

        return (
            <div>
                <h1>AddPayment</h1>
                <form onSubmit={this.handleSubmit}>
          <input
            placeholder="amount"
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
          <input
            placeholder="date"
            type="text"
            name="date"
            value={date}
            onChange={this.handleChange}
            disabled
            
          />
          <input 
            placeholder="user_id"
            type="text"
            name="user_id"
            value={user_id}
            onChange={this.handleChange}
          />          
          <input
            placeholder="account_id"
            type="text"
            name="account_id"
            value={account_id}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            AddPayment
          </button>
      
        </form>

            </div>
        )
    }
}
export default AddPayment;