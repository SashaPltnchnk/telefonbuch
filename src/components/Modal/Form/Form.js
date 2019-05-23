import React from 'react';
import { Button,  Form } from 'semantic-ui-react';
// import { connect } from 'react-redux';


const FormQ = (props) => {

    const inputs = [
        {
            label: 'Phone',
            name: 'phone',
            placeholder: 'Phone'
        },
        {
            label: 'Name',
            name: 'name',
            placeholder: 'Name'
        },
        {
            label: 'Surname',
            name: 'surname',
            placeholder: 'Surname'
        },
        {
            label: 'Mail',
            name: 'mail',
            placeholder: 'Mail'
        },
        {
            label: 'Company',
            name: 'company',
            placeholder: 'Company'
        }
    ]
console.warn(props.form);

    return (
        <Form onSubmit={props.submitHandler}>
            {inputs.map(input => {
                // debugger
                return (

                <Form.Field key={input.name}>
                    <label>{input.label}</label>
                    <input 
                        placeholder={input.placeholder} 
                        name={input.name} 
                        value={props.form[input.name]} 
                        onChange={props.changeInputHandler} 
                    />
                </Form.Field>
                )
            })}
                <Button 
                     disabled={ !props.form.phone
                        || !props.form.name
                        || !props.form.surname
                        || !props.form.mail
                        || !props.form.company
                    }
                    color='purple'>{props.buttonText}</Button>
        </Form>
    )
}

//export default connect(null)(FormQ);
export default FormQ