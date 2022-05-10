import './style.css'
import { ReactComponent as GithubIcon } from 'assets/img/github.svg'

function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='svmovie-nav-content'>
                    <h1>SVMovie</h1>
                    <a href='https://github.com/tairone32'>
                        <div className='svmovie-contact-container'>
                            <GithubIcon />
                            <p className='svmovie-contact-link'>/taironesv</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;