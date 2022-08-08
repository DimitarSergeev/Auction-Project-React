import { useState , useContext} from 'react'
import { useNavigate } from "react-router-dom";


import {AuthContext } from '../../contexts/AuthContext'
import styles from './Create.module.css'
import * as auctionService from '../../services/auctionService'

export const Create = () => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        title: '',
        imageUrl: '',
        createOn: '',
        startPrice: '',
        buyNow: '',
        description: '',
        certificate: 'No',
    })
    
    
    const { userInfo } = useContext(AuthContext)
    const navigate = useNavigate()
    const changeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }
    let haveCertificate = 'No'
    if (data.certificate === 'Yes') {
        haveCertificate = true
    } else {
        haveCertificate = false
        
    }


    const submitHandler = (e) => {
        e.preventDefault()

        auctionService.create(data,userInfo.token)
            .then(() => navigate('/auction'))
            .catch(error => console.log(error))
    }

    const validate = (e) => {
        switch (e.target.name) {
            case 'title':
                setErrors(state => ({
                    ...state,
                    [e.target.name]: data[e.target.name].length < 4
                }))
                break;
            case 'imageUrl':
                setErrors(state => ({
                    ...state,
                    'imageUrl': !data.imageUrl.match(/^https?/)
                }))
                break;
            case 'createOn':
                setErrors(state => ({
                    ...state,
                    'createOn': data.createOn < 1
                }))
                break;
            case 'startPrice':
                setErrors(state => ({
                    ...state,
                    'startPrice': data.startPrice < 100
                }))
                break;
            case 'buyNow':
                setErrors(state => ({
                    ...state,
                    'buyNow': data.buyNow < 500
                }))
                break;
            case 'description':
                setErrors(state => ({
                    ...state,
                    'description': data.description.length < 10
                }))
                break;
            default:
                break;
        }
    }


    return (
        <div id='create-form' className={styles['create-page']}>
            <div className={styles['form-box']}>
                <h2 className={styles.title}>Make an Offer</h2>
                <form onSubmit={submitHandler} className={styles['input-group-create']}>
                    {errors.title &&
                        <label htmlFor="title" className={styles.error}>Product need be min 4 charter length !</label>
                    }
                    <input type='text' className={styles['input-field']} placeholder='Title' name='title' onChange={changeHandler}  />
                    {errors.imageUrl &&
                        <label htmlFor="imageUrl" className={styles.error}>Image need start with http/s</label>
                    }
                    <input type='text' className={styles['input-field']} placeholder='imageUrl' name='imageUrl' onChange={changeHandler} onBlur={(e) => validate(e)} />
                    <div className={styles.number}>
                        {errors.createOn &&
                            <label htmlFor="createOn" className={styles.error}>Year of creation can not be less thah 0</label>
                        }
                        <input type='number' className={styles['input-field-number']} placeholder='Created on' name='createOn' onChange={changeHandler} onBlur={(e) => validate(e)} />
                        {errors.startPrice &&
                            <label htmlFor="startPrice" className={styles.error}>Min start price is 100$</label>
                        }
                        <input type="number" className={styles['input-field-number']} placeholder="Starting price?" name='startPrice' onChange={changeHandler} onBlur={(e) => validate(e)} />
                        {errors.buyNow &&
                            <label htmlFor="buyNow" className={styles.error}>Min buyNow price is 500$</label>
                        }
                        <input type="number" className={styles['input-field-number']} placeholder="Buy now?" name='buyNow' onChange={changeHandler} onBlur={(e) => validate(e)} />
                    </div>
                    {errors.description &&
                        <label htmlFor="description" className={styles.error}>Product description need be min 10 charter length</label>
                    }
                    <div className={styles.description}>
                        <h3 className={styles.descriptionH3}> Description:</h3>
                        <textarea name="description" id="description" cols="50" rows="5" className={styles.textArea} onChange={changeHandler} onBlur={(e) => validate(e)}></textarea>
                    </div>
                    {errors.certificate &&
                        <label htmlFor="certificate" className={styles.error}>Please select one of the certificate options</label>
                    }
                    <div className={styles.certificate}>
                        <label>Do you have certificate ?</label>
                        <div className={styles['radio-btn']}>
                            <input type="radio" value='No' name='certificate' onChange={changeHandler} onBlur={(e) => validate(e)} defaultChecked/> No
                        </div>

                        <div className={styles['radio-btn']}>
                            <input type="radio" value='Yes' name='certificate' onChange={changeHandler} onBlur={(e) => validate(e)} /> Yes
                        </div>
                        {haveCertificate &&
                            <>
                                {errors.nameCert &&
                                    <label htmlFor="nameCert" className={styles.error}>Type of certificate need be min 5 charter length</label>
                                }
                                < input type='text' className={styles['input-field']} placeholder='Name of certificate' name='nameCert' onChange={changeHandler} onBlur={(e) => validate(e)} />
                            </>
                        }
                    </div>

                    <button type='submit' className={styles['submit-btn']}>C r e a t e</button>
                </form>
            </div>
        </div>
    )

}