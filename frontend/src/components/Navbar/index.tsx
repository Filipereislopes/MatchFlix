import {ReactComponent as LogoTexto} from 'assets/img/LogoTexto.svg';



function Navbar(){

    return(
        <header>
        <nav className="container">
              <div>
                <LogoTexto/>
              </div>
            <a href="$">
              <div className="match-button-entrar">
              <button>Entrar</button>
              </div>
            </a>  
        </nav>
      </header>
    );

}

export default Navbar;