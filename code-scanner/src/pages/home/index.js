import React, { useState } from 'react'
import { InputCode } from '../../components'
import styles from './index.module.scss';

export const Home = () => {
    const [valueCode, setValueCode] = useState("");
    const [valid, setValid] = useState(false);

    const handleError = (err) => {
        console.log(err);
    }

    const handleScan = (data) => {
        setValueCode(data);
    }

    const handleValidate = (data) => {
        let regexp = /\w+\-\d+/
        
        setValid(!regexp.test(data ? data : valueCode));

    }

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h3>Plese type or scan a Bar Code:</h3>
                <InputCode type='text' name='barCode' value={valueCode} placeholder='Code' error={valid} onChange={setValueCode} handleValidate={handleValidate}
                    handleError={handleError} handleScan={handleScan}></InputCode>
                {valid ? <label className={styles.errorMessage}>Invalid Value</label>:null}
            </div>
        </div>
    )
}
