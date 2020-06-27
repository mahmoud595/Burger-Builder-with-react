import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from "../../../components/UI/Input/Input"

class ContactData extends Component {
    state = {
        orderForm :{
            name: {
                elementType : "input" ,
                elementConfig : {
                    type : "text" ,
                    placeholder : "Your Name"
                },
                value:""
            },
            email: {
                elementType : "input" ,
                elementConfig : {
                    type : "text" ,
                    placeholder : "Your Email"
                },
                value:""
            },
           
                street: {
                    elementType : "input" ,
                    elementConfig : {
                        type : "text" ,
                        placeholder : "Your Street"
                    },
                    value:""
                },
               zipCode: {
                elementType : "input" ,
                elementConfig : {
                    type : "text" ,
                    placeholder : "Zip Code"
                },
                value:""
            },
            country : {
                elementType : "input" ,
                elementConfig : {
                    type : "text" ,
                    placeholder : "Your Country"
                },
            },
            deliveryMethod : {
                elementType : "select" ,
                elementConfig : {
                    options : [{value : "fastest" , displayedValue :"Fastest" },
                    {value : "cheapest" , displayedValue : "Cheapest"}]
                },
                value:""
            },
        },

        
        loading: false
    }

    orderHandler = ( event ) => {
        //el method beta3 el event deh bta5aleh lama ned3'at 3ala el zorar maye3melsh reload la2eno no3 submit
        event.preventDefault();
        this.setState( { loading: true } );
        const formElements ={}
        for (let formElementsIdentifier in this.state.orderForm){
            formElements[formElementsIdentifier] =this.state.orderForm[formElementsIdentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            data : formElements
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }
    changeInputHandler = (eve , inputIdentifier) => {
        const updatedForm = {...this.state.orderForm}
        const updatedElement = {...updatedForm[inputIdentifier]}
        updatedElement.value =eve.target.value
        updatedForm[inputIdentifier] =updatedElement
        this.setState({orderForm : updatedForm})

    }

    render () {
        const formElements =[]
        for(let key in this.state.orderForm) {
            formElements.push({
                id : key ,
                config : this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElements.map(formElement=>{
                    return (
                    <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(eve)=>{this.changeInputHandler(eve ,formElement.id)}}
 />)
                })}
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;