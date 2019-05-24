import React from 'react';
import { Button,  Form } from 'semantic-ui-react';


const FormQ = (props) => {

    const inputs = [
        {
            label: 'Phone',
            name: 'phone',
            placeholder: '380',
            type: 'number'
        },
        {
            label: 'Name',
            name: 'name',
            placeholder: 'Name',
            type: 'text'
        },
        {
            label: 'Surname',
            name: 'surname',
            placeholder: 'Surname',
            type: 'text'
        },
        {
            label: 'Mail',
            name: 'mail',
            placeholder: 'Mail',
            type: 'email'
        },
        {
            label: 'Company',
            name: 'company',
            placeholder: 'Company',
            type: 'text'
        }
    ]
// console.warn(props.form);

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
                        type={input.type}
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
                        || !props.form.selectedFile
                    }
                    color='teal'>{props.buttonText}</Button>
        </Form>
    )
}


export default FormQ