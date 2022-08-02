import {ReactComponent as LogoGit} from '../../assets/img/git.svg';
import './styles.css';

function Navbar(){

    return(
        <header>
        <nav className="container">
          <div className="match-nav">
            <div className="match-logo-name">
              <h1>Matchflix</h1>
            </div>
            <div className="match-git">
              <a href="https://github.com/Filipereislopes" target="_blank">
                <LogoGit/>
                <p className="match-git-name">/Filipereislopes</p>
              </a>  
            </div>
          </div>
        </nav>
      </header>
    );

}

export default Navbar;