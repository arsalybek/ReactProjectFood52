import React, { ChangeEvent, ReactElement,useEffect, useState } from 'react';
import "./Field.css";

interface Props {
    label: string;
    type?: 'email' | 'password' | 'text';
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function Field({label, onChange, type, required}: Props): ReactElement {

    let inputType = 'text';
    const [name, setName] = useState<string>('');
    
    
        useEffect(() => {
        document.title = `Hello ${name}`;
        }, [name])
    
    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component will be unmount');
        }
    }, []);

    useEffect(() => {
        console.log(`Any state changed Name: ${name}`);
    });

    useEffect(() => {
        console.log(`Name changed: ${name}`);
    }, [name]);
    if (type) {
        inputType = type;
    }

    return (
        <div className="login_form">
            <span>{label}</span>
            <input type={inputType} onChange={onChange} required={required}/>
        </div>
            
    )
}
