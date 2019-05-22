import React from 'react';
import { Button,  Form } from 'semantic-ui-react';
// import { connect } from 'react-redux';


const form = (props) => {

    const inputs = [
        {
            label: 'Company',
            name: 'company',
            placeholder: 'Company'
        },
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
    ]

    return (
        <Form onSubmit={props.submitHandler}>
            {inputs.map(input => {
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
                <Button color='purple' type='submit'>Save new contact</Button>
        </Form>
    )
}

export default form;