import { useState } from 'react'

import styles from './Create.module.css'

export const Create = () => {
    const [data, setData] = useState({
        title: '',
        imageUrl: '',
        createOn: '',
        startPrice: '',
        buyNow: '',
        description: '',
        certificate: '',
        nameCert: ''
    })
    console.log(data);
    const changeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    let haveCertificate = ''
    if (data.certificate === 'Yes') {
        haveCertificate = true
    } else {
        haveCertificate = false
        data.nameCert = ''
    }

    return (
        <div id='create-form' className={styles['create-page']}>
            <div className={styles['form-box']}>
                <h2 className={styles.title}>Make an Offer</h2>
                <form className={styles['input-group-create']}>
                    <input type='text' className={styles['input-field']} placeholder='Title' name='title' onChange={changeHandler} />
                    <input type='text' className={styles['input-field']} placeholder='imageUrl' name='imageUrl' onChange={changeHandler} />
                    <div className={styles.number}>
                        <input type='number' className={styles['input-field-number']} placeholder='Created on' name='createOn' onChange={changeHandler} />
                        <input type="number" className={styles['input-field-number']} placeholder="Starting price?" name='startPrice' onChange={changeHandler} />
                        <input type="number" className={styles['input-field-number']} placeholder="Buy now?" name='buyNow' onChange={changeHandler} />
                    </div>

                    <div className={styles.description}>
                        <h3 className={styles.descriptionH3}> Description:</h3>
                        <textarea name="description" id="description" cols="50" rows="5" className={styles.textArea} onChange={changeHandler}></textarea>
                    </div>

                    <div className={styles.certificate}>
                        <label>Do you have certificate ?</label>
                        <div className={styles['radio-btn']}>
                            <input type="radio" value='No' name='certificate' onChange={changeHandler} /> No
                        </div>

                        <div className={styles['radio-btn']}>
                            <input type="radio" value='Yes' name='certificate' onChange={changeHandler} /> Yes
                        </div>
                        {haveCertificate &&
                            <input type='text' className={styles['input-field']} placeholder='Name of certificate' name='nameCert' onChange={changeHandler} />
                        }
                    </div>

                    <button type='submit' className={styles['submit-btn']}>C r e a t e</button>
                </form>
            </div>
        </div>
    )

}