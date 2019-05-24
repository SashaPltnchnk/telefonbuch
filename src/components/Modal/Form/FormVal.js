// import React, { Component } from 'react';
// import { Button,  Form } from 'semantic-ui-react';


// class FormQ extends Component {
//     state = {
//         contactForm: {
//             phone: {
//                 elementType: 'input',
//                 elementConfig: {
//                     name: 'phone',
//                     type: 'number',
//                     placeholder: 'Phone'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             name: {
//                 elementType: 'input',
//                 elementConfig: {
//                     name: 'name',
//                     type: 'text',
//                     placeholder: 'Name'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             surname: {
//                 elementType: 'input',
//                 elementConfig: {
//                     name: 'surname',
//                     type: 'text',
//                     placeholder: 'Surname'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             mail: {
//                 elementType: 'input',
//                 elementConfig: {
//                     name: 'mail',
//                     type: 'email',
//                     placeholder: 'Mail'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             }, 
//             company: {
//                 elementType: 'input',
//                 elementConfig: {
//                     name: 'company',
//                     type: 'text',
//                     placeholder: 'Company'
//                 },
//                 value: '',
//                 validation: {
//                     required: true
//                 },
//                 valid: false,
//                 touched: false
//             }          
//         },
//         formIsValid: false
//     }

//     checkValidity(value, rules) {
//         let isValid = true;

//         if (rules.required) {
//             isValid = value.trim() !== '' && isValid;
//         }

//         if (rules.minLength) {
//             isValid = value.length >= rules.minLength && isValid;
//         }

//         if (rules.maxLength) {
//             isValid = value.length <= rules.maxLength && isValid;
//         }

//         return isValid;
//     }


//     render () {
//         const formElementsArray = [];
//         for (let key in this.state.contactForm) {
//             formElementsArray.push({
//                 id: key,
//                 config: this.state.contactForm[key]
//             });
//         return (
//             <Form onSubmit={props.submitHandler}>
//                 {formElementsArray.map(formElement => {
//                     return (
//                         <Form.Field key={formElement.id}>
//                             <label>{input.label}</label>
//                             <input 
//                                 placeholder={input.placeholder} 
//                                 name={input.name} 
//                                 value={props.form[input.name]} 
//                                 onChange={props.changeInputHandler} 
//                                 type={input.type}
//                             />
//                         </Form.Field>
//                     )}
//                     <Input 
//                         key={formElement.id}
//                         elementType={formElement.config.elementType} 
//                         elementConfig={formElement.config.elementConfig}
//                         value={formElement.config.value}
//                         invalid={!formElement.config.valid}
//                         shouldValidate={formElement.config.validation}
//                         touched={formElement.config.touched}
//                         changed={(event) =>this.inputChangedHandler(event, formElement.id)} />
//                 ))}
//             <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
//             </Form>
//             <Form onSubmit={props.submitHandler}>
//             {inputs.map(input => {
//                 // debugger
//                 return (

//                 <Form.Field key={input.name}>
//                     <label>{input.label}</label>
//                     <input 
//                         placeholder={input.placeholder} 
//                         name={input.name} 
//                         value={props.form[input.name]} 
//                         onChange={props.changeInputHandler} 
//                         type={input.type}
//                     />
//                 </Form.Field>
//                 )
//             })}
//                 <Button color='teal'>{props.buttonText}</Button>
//         </Form>
//         )
//     }
// }

    



// export default FormQ