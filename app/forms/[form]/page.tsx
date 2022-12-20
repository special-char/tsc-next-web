'use client';
import CustomForm from '@/ui/CustomForm';
import React from 'react'
import '@/styles/form.css'
import data from '../registrationForm.json';
import reactTraining from '../reactRegistration.json';
type Props = {
    params?: any;
}

// const data = [
//     {
//         "name": "firstname",
//         "label": "First Name",
//         "type": "text",
//         "placeholder": "First Name",
//         "component": "TextInput",
//         "initialvalue": ""
//     },
//     {
//         "name": "lastname",
//         "label": "Last Name",
//         "type": "text",
//         "placeholder": "Last Name",
//         "component": "TextInput",
//         "initialvalue": ""
//     },
//     {
//         "label": "Phone Number",
//         "name": "phonenumber",
//         "type": "tel",
//         "placeholder": "+91 1234 5678 90",
//         "component": "TextInput",
//         "initialvalue": ""
//     },
//     {
//         "label": "Email Address",
//         "name": "email",
//         "type": "email",
//         "placeholder": "Email",
//         "component": "TextInput",
//         "initialvalue": ""
//     },
//     {
//         "label": "College Name",
//         "name": "collegename",
//         "type": "text",
//         "placeholder": "College Name",
//         "component": "TextInput",
//         "initialvalue": ""
//     },
//     {
//         "label": "Branch",
//         "name": "branch",
//         "type": "text",
//         "placeholder": "Branch",
//         "component": "",
//         "initialvalue": ""
//     }]
// const routeName = JSON.parse(data1.route_name)
// console.log("routeName", routeName);

const Page = ({ params }: Props) => {
    params.form = data.route_name;
    console.log("params assigned", params.form);

    const initialvalues = data.fields.reduce((acc, val) => {
        return { ...acc, [val.name]: val.initialvalue };
    }, {});

    return (
        <>
            <section id="register" className="register">
                <h1 className="text-center">Registration Form!</h1>
                <div className="register__form-container">
                    <CustomForm
                        buttonStyle="register__btn"
                        initialValues={initialvalues}
                        onSubmit={(values: any) => {
                            console.log(values);
                        }}
                        fields={data.fields}
                    />
                </div>

                <div className="register__bg-circle1 "></div>
                <div className="register__bg-circle2 "></div>
                <div className="register__bg-circle3 "></div>
            </section>
        </>
    )
}

export default Page