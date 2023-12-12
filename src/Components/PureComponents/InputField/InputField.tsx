import React from 'react'
import styles from './page.module.css'


interface InputFieldProps {
    type?: string;
    lable?: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, lable }) => {
    return (
        <div className={styles.InputField}>
            <label>{lable || 'Please provide lable'}</label>
            <input type={type || 'text'} />
        </div>

    )
}

export default InputField
