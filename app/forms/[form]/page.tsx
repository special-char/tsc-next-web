'use client';

import React from 'react'
import '@/styles/form.css'
import DynamicForm from '@/ui/DynamicForm';
type Props = {
}

const Page = (props: Props) => {

    return (
        <>
            <section id="register" className="register">
                <h1 className="text-center">Registration Form!</h1>
                <div className="register__form-container">
                    <DynamicForm id={1} />
                </div>
                <div className="register__bg-circle1 "></div>
                <div className="register__bg-circle2 "></div>
                <div className="register__bg-circle3 "></div>
            </section>
        </>
    )
}

export default Page