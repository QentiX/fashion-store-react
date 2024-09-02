import logoImg from './../../img/icons/logo.svg'
import './header.css'

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__row'>
					<div className='header__logo'>
						<img src={logoImg} alt='Header logo' />
						<span>Fashion</span>
					</div>
					<nav className='header__nav navbar'>
						<ul className='navbar__list'>
							<li className='navbar__item'>
								<a href='#!' className='navbar__link'>
									CATALOGUE
								</a>
							</li>
							<li className='navbar__item'>
								<a href='#!' className='navbar__link'>
									FASHION
								</a>
							</li>
							<li className='navbar__item'>
								<a href='#!' className='navbar__link'>
									FAVOURITE
								</a>
							</li>
							<li className='navbar__item'>
								<a href='#!' className='navbar__link'>
									LIFESTYLE
								</a>
							</li>
							<li className='navbar__item'>
								<a href='#!' className='navbar__link navbar__button'>
									SIGN UP
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
