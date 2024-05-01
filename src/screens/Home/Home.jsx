import { Routes, Route } from 'react-router-dom';
import styles from './Home.module.css';
import ProductRegister from '../ProductRegister/ProductRegister';
import Realeases from '../Realeases/Realeases';
import Pets from '../Pets/Pets'
import NavBar from '../Navbar/NavBar';

export function Home() {

    return (
        <div className={styles.home}>
            <NavBar/>
            <Routes>
                <Route path="/productregister" element={<ProductRegister />} />
                <Route path="/pets" element={<Pets />} />
            </Routes>
            
        </div>
    )
}