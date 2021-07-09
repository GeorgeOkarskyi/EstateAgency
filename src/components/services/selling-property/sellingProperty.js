import React from 'react';
import {Field, reduxForm} from "redux-form";

const validate = values => {
    const errors = {}
    if (!values.description) {
        errors.description = 'Required'
    } else if (values.description.length < 10) {
        errors.description = 'Must be 10 characters or more'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
}

const warn = values => {
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)


const SellingPropertyForm = (props) => {
    const {handleSubmit, submitting, pristine, reset} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="description"
                type="text"
                component={renderField}
                label="Description"
            />
            <Field
                name="description"
                type="text"
                component={renderField}
                label="Description"
            />
            <Field name="email" type="email" component={renderField} label="Email"/>
            <Field name="age" type="number" component={renderField} label="Age"/>
            <div>
                <button type="submit" disabled={submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}
const SellingPropertyReduxForm = reduxForm({form: 'sellingProperty', validate, warn})(SellingPropertyForm)

const SellingProperty = ({addProperty}) => {

    return <SellingPropertyReduxForm onSubmit={addProperty}/>
}
export default SellingProperty;
