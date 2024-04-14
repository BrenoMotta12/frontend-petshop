import { useState } from 'react';
import styles from './Login.module.css';
import img_login from '../../assets/img_login.png';
import { useNavigate } from 'react-router';
import { logar } from '../../services/logar';
import { useDispatch } from 'react-redux';
import { authReducer } from '../../redux/features/login/auth';

export function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [auth, setAuth] = useState({
        username_or_email: "",
        password: ""
    });

    function handleChange(e) {
        setAuth({
            ...auth,
            [e.target.name]: e.target.value
        });
    }

    async function submit(e) {
        e.preventDefault();

        try {
            const authenticated = await logar(auth);

            console.log(authenticated);

            if (authenticated.data.status == "success") {
                dispatch(authReducer(authenticated.data));
                sessionStorage.setItem('auth', JSON.stringify(authenticated.data));
                navigate('/home');
            }
        } catch (error) {
            if (error.response.status === 400) {
                return alert(error.response.data.message);
            } else {
                return alert("Erro ao logar, entre em contato com o administrador.");
            }
        }

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
                        id="username_or_email" 
                        name='username_or_email'
                        type="text"
                        placeholder='Usuário'
                        value={auth.username_or_email}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles["input-container"]}>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        id='password'
                        name='password'
                        type="password" 
                        placeholder='Senha'
                        value={auth.password}
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