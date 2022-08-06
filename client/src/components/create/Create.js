import styles from './Create.module.css'


export const Create = () => {

    return (
        <div id='create-form' className={styles['create-page']}>
            <div className={styles['form-box']}>
                <h2 className={styles.title}>Make an Offer</h2>
                <form className={styles['input-group-create']}>
                    <input type='text' className={styles['input-field']} placeholder='Title' name='title' />
                    <input type='text' className={styles['input-field']} placeholder='imageUrl' name='imageUrl' />
                    <input type='number' className={styles['input-field']} placeholder='Created on' name='imageUrl' />
                    <div className={styles.price}>
                        <input type="number" className={styles['input-field-price']} placeholder="Starting price?" />
                        <input type="number" className={styles['input-field-price']} placeholder="Buy now?" />
                    </div>

                    <div className={styles.description}>
                        <h3 className={styles.descriptionH3}> Description:</h3>
                        <textarea name="description" id="description" cols="50" rows="5" className={styles.textArea}></textarea>
                    </div>

                    <div className={styles.certificate}>
                        <label>Do you have certificate ?</label>
                        <div className={styles['radio-btn']}>
                            <input type="radio" value='No' name='certificate' /> No
                        </div>

                        <div className={styles['radio-btn']}>
                            <input type="radio" value='Yes' name='certificate' /> Yes
                        </div>
                        {/* <input type='text' className={styles['input-field']} placeholder='Name of certificate' name='imageUrl' /> */}
                    </div>

                    <button type='submit' className={styles['submit-btn']}>C r e a t e</button>
                </form>
            </div>
        </div>
    )

}