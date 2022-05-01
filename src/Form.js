import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";


const CustomForm = () => {

    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                amount: '',
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'Мінімум 2 символа для заповнення')
                        .required('Обовязкове поле!'),
                email: Yup.string()
                        .email('Некоректна email адреса')
                        .required('Обовязкове поле!'),
                amount: Yup.number()
                        .min(5, 'Не менше 5')
                        .required('Обовязкове поле!'),
                currency: Yup.string().required('Виберіть валюту'),
                text: Yup.string()
                        .min(10, 'Не менше 5 символів'),
                terms: Yup.boolean()
                        .required('Необхідна згода')
                        .oneOf([true], 'Необхідна згода')
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
                <Form className="form">
                    <h2>Надіслати пожертвування</h2>
                    <label htmlFor="name">Ваше ім'я</label>
                    <Field
                        id="name"
                        name="name"
                        type="text"
                    />
                    <ErrorMessage className="error" name='name' component="div"/>
                    <label htmlFor="email">Ваша пошта</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                    />
                    <ErrorMessage className="error" name='email' component="div"/>
                    <label htmlFor="amount">Кількість</label>
                    <Field
                        id="amount"
                        name="amount"
                        type="number"
                    />
                    <ErrorMessage className="error" name='amount' component="div"/>
                    <label htmlFor="currency">Валюта</label>
                    <Field
                        id="currency"
                        name="currency"
                        as="select">
                            <option value="">Виберіть валюту</option>
                            <option value="USD">USD</option>
                            <option value="UAH">UAH</option>
                            <option value="EUR">EUR</option>
                    </Field>
                    <ErrorMessage className="error" name='currency' component="div"/>
                    <label htmlFor="text">Ваше повідомлення</label>
                    <Field 
                        id="text"
                        name="text"
                        as="textarea"
                    />
                    <ErrorMessage className="error" name='text' component="div"/>
                    <label className="checkbox">
                        <Field 
                            name="terms" 
                            type="checkbox"/>
                        Ви погоджуєтесь з політикою конфіденційності?
                    </label>
                    <ErrorMessage className="error" name='terms' component="div"/>
                    <button type="submit">Відправити</button>
                </Form>
        </Formik>
    )
}

export default CustomForm;