import { Routes, Route } from 'react-router-dom';
import styles from './Home.module.css';
import ProductRegister from '../ProductRegister/ProductRegister';
import Realeases from '../Realeases/Realeases';

export function Home() {

    return (
        <div className={styles.home}>
            <Routes>
                <Route path="/productregister" element={<ProductRegister />} />
                <Route path="/realeases" element={<Realeases />} />
            </Routes>
        </div>
    )
}