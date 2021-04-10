import React, { useState } from 'react'
import addToMailChimp from 'gatsby-plugin-mailchimp';

import * as S from './style';

const Form = ({ setSending, setResult }) => {
    const [values, setValues] = useState({FNAME: '', email: ''});
    const [disabled, setDisabled] = useState(false);

    const getPathName = () => window.location.pathname;
    const subscribe = ({ FNAME, email, pathname = getPathName()}) => addToMailChimp(email, { FNAME, pathname })

    const onSubmit = async (e) => {
        e.preventDefault()
        setSending(oldValue => !oldValue);
        const {result} = await subscribe(values);
        setResult(result);
        setDisabled(true)
        setSending(oldValue => !oldValue);
    };

    const handleChange = ({ target: { name, value }}) => {
        setValues(oldState => ({
            ...oldState,
            [name]: value
        }));
    };

    return (
        <S.Container>
            <S.InputContainer>
                <S.Input type="text" value={values.FNAME} placeholder="Nome" name="FNAME" onChange={handleChange}/>
                <S.Input type="text" value={values.email} placeholder="E-mail" name="email" onChange={handleChange}/>
            </S.InputContainer>
            <S.Button type="button" value="Inscrever-se" onClick={disabled ? () => {} : (e) => onSubmit(e)} disabled={disabled}/>
        </S.Container>
    )
}

export default Form