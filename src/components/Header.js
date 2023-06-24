import './Header.css'
import '../App.css'
import headerLine from '../img/header-line.svg'
import nameLine from '../img/name-line.svg'

function Header () {
    return (
    <>
        <div className='header'>
            <h1 className='header-h1'>A memory in a photograph</h1>
            <img className='header-line' src= {headerLine}  />
        </div>
        <div className='name'>
            <div>
                <p>Artiom <br /> Zavodov</p>
                <p className='name-abba'>zavodov.ph</p>
                <img className='name-img' src={nameLine} />
            </div>
            <div>
                <p>N.Novgorod</p>
            </div>
        </div>
    </>
    )
}

export default Header