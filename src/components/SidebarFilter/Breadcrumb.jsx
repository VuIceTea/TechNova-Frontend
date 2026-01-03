import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ category }) => {
    return (
        <nav className={styles.breadcrumb}>
            <Link to="/" className={styles.link}>Trang chủ</Link>
            <span className={styles.separator}>/</span>
            <Link to="/category?category=all" className={styles.link}>Sản phẩm</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{category}</span>
        </nav>
    );
};

export default Breadcrumb;
