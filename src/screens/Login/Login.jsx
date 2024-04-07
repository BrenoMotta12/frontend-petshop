import { useState } from 'react';
import { authReducer, logoutReducer } from '../../redux/features/login/auth';
import { useSelector, useDispatch } from 'react-redux'
import styles from './Login.module.css';
import img_login from '../../assets/img_login.png';
import { useNavigate } from 'react-router';

export function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        usuario: "",
        senha: ""
    });

    function handleChange(e) {
        setAuth({
            ...auth,
            [e.target.name]: e.target.value
        });
    }

    function submit(e) {
        e.preventDefault();

        const objAuth = {
            authenticated: false,
            id: 1,
            usuario: auth.usuario,
        }

        if (auth.senha === '123') {
            objAuth.authenticated = true;
            navigate('/');
        } else {
            objAuth.authenticated = false;
            alert('Usuário ou Senha incorreta');
        }

        dispatch(authReducer(objAuth));
        console.log(objAuth);
    }
    return (
        <div className={styles.login}>
            <div className={styles["image-container"]}>
                <img src={img_login} alt="Animais felizes" />
            </div>
            <div className={styles["login-container"]}>
                <h1 className={styles.logo}>PETSHOP BICHO COMEU</h1>

                <div className={styles["input-container"]}>
                    <label htmlFor="usuario">Usuário</label>
                    <input 
                        id="usuario" 
                        name='usuario'
                        type="text"
                        placeholder='Usuário'
                        value={auth.usuario}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles["input-container"]}>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        id='senha'
                        name='senha'
                        type="password" 
                        placeholder='Senha'
                        value={auth.senha}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles["controls-container"]}>
                    <button onClick={(e) => submit(e)}>ENTRAR</button>
                </div>
            </div>
        </div>
    )
}