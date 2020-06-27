import React from "react"
import classes from "./Input.css"
const Input = (props) => {
    let inputElement =null
    switch(props.elementType){
        case('input') :
        inputElement =<input className={classes.InputElement}{...props.elementConfig} onChange={props.changed}/>
        break;
        case('textarea') :
        inputElement =<textarea className={classes.InputElement}{...props.elementConfig} onChange={props.changed}/>
        break;
        case('select') :
        inputElement =(<select
            className={classes.InputElement}
            value={props.value}
            onChange={props.changed}>
            {props.elementConfig.options.map(option=>{
                return <option key={option.value} value={option.value}>{option.displayedValue}</option>
            })}
        </select>)
        break;
        default :
        inputElement =<input className={classes.InputElement}{...props.elementConfig}/>
    }




    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label> 
            {inputElement }

        </div>
    )
}

export default Input