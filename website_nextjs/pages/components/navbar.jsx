import styles from 'styles/header.module.scss'

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div className="left-side">
                <div className={styles.brandContainer}>
                    <img src="images/logo/yellowuncle_120x120.png" alt="yellow uncle logo"/>
                    <span className="name">Yellow Uncle</span>
                </div>
            </div>
            <div className="right-side">

            </div>
        </nav>
    );
}