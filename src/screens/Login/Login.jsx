import styles from './Login.module.css';
import img_login from '../../assets/img_login.png';

export function Login() {
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
                        type="text"
                        placeholder='Usuário'
                    />
                </div>
                <div className={styles["input-container"]}>
                    <label htmlFor="senha">Senha</label>
                    <input 
                        id='senha'
                        type="password" 
                        placeholder='Senha'
                    />
                </div>
                <div className={styles["controls-container"]}>
                    <button>ENTRAR</button>
                </div>
            </div>
        </div>
    )
}