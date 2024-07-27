import Logo from '../../../assets/pokemon.png'
import css from './header.module.scss'

const Header = () => {
    return (
        <nav className={`navbar navbar-dark bg-dark ${css.contenedor}`}>
            <div className="container justify-content-evenly">
                <a className="navbar-brand" href="https://pokemongolive.com/" target="_blank">
                    <img src={Logo} alt="logo" width={100}/>
                </a>

                <div className={css.formulario}>
                    <form className="d-flex align-items-center" role="search">
                        <input className={`form-control me-2 ${css.busqueda}`} type="search" placeholder="Type something" aria-label="Buscar" />
                        <button className={`btn btn-outline-primary ${css.botonSearch}`} type="submit">Search Pokemon</button>
                    </form>
                </div>
            </div> 
        </nav>
    )
}

export default Header
