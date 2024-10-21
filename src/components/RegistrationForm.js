import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import validator from "validator/es";
import instance from "../utils/Axios";
import {CircleAnimationIcon} from "../pages/ActivateAccountPage";


export default  function RegistrationForm() {
    const [firstName, setFirstName] = useState({firstName:'',errorMessage: '', isFirstNameValidate: false })
    const [lastName, setLastName] = useState({lastName:'',errorMessage: '', isLastNameValidate: false })
    const [email, setEmail] = useState({email: '', errorMessage: '', isEmailValidate: false})
    const [password, setPassword] = useState({password: '', errorMessage: '', isPasswordValidate: false})
    const [error, setError] = useState('')
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const emailRef = useRef(null);
    const passwordRef = useRef(null)
    const {t} = useTranslation()

    useEffect(() => {
        firstNameRef.current.focus();
    }, [])

    const validateText = (textValue) => {
        return validator.isLength(textValue, {min: 2});
    }

    const handleFirstNameChange =  (event) => {
        const textValue = event.target.value
        if(validateText(textValue)) {
            setFirstName({
                firstName: textValue,
                errorMessage: '',
                isFirstNameValidate: true
            })
        } else {
            setFirstName({
                firstName: firstName,
                errorMessage:  'Firstname should be greater or equal to two 2 characters',
                isFirstNameValidate: false
            })
        }
    }

    const handleLastNameChange =  (event) => {
        const textValue = event.target.value
        if(validateText(textValue)) {
            setLastName({
                lastName: textValue,
                errorMessage: '',
                isFirstNameValidate: true
            })
        } else {
            setLastName({
                lastName: firstName,
                errorMessage:  'Firstname should be greater or equal to two 2 characters',
                isFirstNameValidate: false
            })
        }
    }

    const validateEmail = (event) => {
        const emailValue = event.target.value
        if (validator.isEmail(emailValue)) {
            setEmail({
                email: emailValue,
                errorMessage: '',
                isEmailValidate: true
            })

        } else {
            setEmail({
                email: emailValue,
                errorMessage: 'Veuillez fournir un format d\'e-mail correct',
                isEmailValidate: false
            });
        }

    }

    const validatePassword = (event) => {
        const passwordValue = event.target.value
        if (validator.isLength(passwordValue, {min: 8})) {
            setPassword({
                password: passwordValue,
                errorMessage: '',
                isPasswordValidate: true
            })

        } else {
            setPassword({
                password: passwordValue,
                errorMessage: 'Veuillez fournir un mot de passe d\'une longueur minimale de 8 caractères',
                isPasswordValidate: false
            })
        }

    }

    const isButtonDisabled = () => {
        return !(email.isEmailValidate && password.isPasswordValidate)
    }

    const handleSubmit = async () => {
        setLoading(true)
        const email = emailRef.current.value
        const password = passwordRef.current.value

        try {
            const response = await instance.post('/auth/jwt/create', {
                email:email,
                password:password
            })
            setError('')
            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            setLoading(false)
        } catch (error) {
            setError(error.response.data.detail)
            setLoading(false)
        }
    }

    return (
        <form className="space-y-2 w-full" noValidate={true}>
            <p className="text-red-500 text-xs">{error}</p>
            <div className="flex flex-col gap-1 w-full">
                <label className="text-sm" htmlFor="firstname">Firstname</label>
                <input onChange={(event) => handleFirstNameChange(event)}
                       value={firstName.firstName}
                       ref={firstNameRef}
                       placeholder="e.g. micheal"
                       className="flex-grow px-1 py-1 text-xs placeholder:text-[10px] placeholder:text-black rounded-md border border-gray-400 focus:border-green-300"
                       name="firstname"
                       type="text"/>
                <p className="text-[8px] text-red-500 font-medium">{lastName.errorMessage}</p>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="text-sm" htmlFor="lastname">LastName</label>
                <input onChange={(event) => handleLastNameChange(event)}
                       value={lastName.lastName}
                       ref={lastNameRef}
                       placeholder="e.g. Jordan"
                       className="flex-grow px-1 py-1 text-xs placeholder:text-[10px] placeholder:text-black rounded-md border border-gray-400 focus:border-green-300"
                       name="lastname"
                       type="text"/>
                <p className="text-[8px] text-red-500 font-medium">{lastName.errorMessage}</p>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label className="text-sm" htmlFor="email">Email</label>
                <input onChange={(event) => validateEmail(event)}
                       value={email.email}
                       ref={emailRef}
                       placeholder="e.g. micahel.jordan@domain.ch"
                       className="flex-grow px-1 py-1 text-xs placeholder:text-[10px] placeholder:text-black rounded-md border border-gray-400 focus:border-green-300"
                       name="email"
                       type="email"/>
                <p className="text-[8px] text-red-500 font-medium">{email.errorMessage}</p>
            </div>
            <div className="flex flex-col gap-1 w-full">
                <label htmlFor="password">{t('login_password_field_name')}</label>
                <input onChange={(event) => validatePassword(event)}
                       value={password.password}
                       ref={passwordRef}
                       placeholder="*************"
                       className="w-full px-1 py-1 text-xs  placeholder:text-[10px] placeholder:text-black rounded-md border border-gray-400"
                       name="password" type="password"/>
                <p className="text-[8px] text-red-500 font-medium">{password.errorMessage}</p>
            </div>
            <a className="text-xs underline text-green-800"
               href="/account/password-reset">{t('login_forgotten_link_name')}</a>
            <button
                onClick={handleSubmit}
                type="button"
                disabled={isButtonDisabled()}
                className="bg-green-600 capitalize w-full flex flex-row items-center justify-center text-white px-1 py-1  text-sm rounded-md disabled:bg-gray-200 disabled:text-black">
                {loading ? <CircleAnimationIcon className="w-5"/> : "register"}
            </button>
        </form>
    )
}
