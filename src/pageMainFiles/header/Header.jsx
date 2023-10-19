import './styleHeader/main.css'
import './styleHeader/mainResponsive.css'
import { useState } from 'react'
export default function Header(){
    
    const [menuActive, setMenuActive] = useState(false);

    function activeMenu(){
        
        const menu = document.getElementById('MenuContainer');
        
        if(menuActive == false){
            setMenuActive(true);
            menu.style.display = 'block';
        }else{
            setMenuActive(false);
            menu.style.display = 'none';
        }
    }
    
    return(
        <div>
            <header className="header-class">
                <nav className="navClass">
                    <h1>Felipe Liandro</h1>
                    <div className="navDivMain">
                        <ul className='ulListNav'>
                            <li>
                                <a>Trabalhos</a>
                            </li>
                            <li>
                                <a>Sociais</a>
                            </li>
                            <li>
                                <a>Sobre Mim</a>
                            </li>
                        </ul>
                    </div>
                    <menu className='MenuButton'>
                        <span onClick={activeMenu} className='material-symbols-outlined menuClose'>menu</span>
                        <div id='MenuContainer' className='MenuContainer'>
                            <div className="mainMenu">
                                <nav className="menuNavClass">
                                    <h1>Felipe Liandro</h1>
                                    <ul>
                                    <li>
                                        <a>Trabalhos</a>
                                    </li>
                                    <li>
                                        <a>Sociais</a>
                                    </li>
                                    <li>
                                        <a>Sobre Mim</a>
                                    </li>
                                    </ul>
                                </nav>

                                <footer>
                                    <p>Felipe Liandro — 2023</p>
                                </footer>

                            </div>
                        </div>
                    </menu>
                </nav>
            </header>
        </div>
    )
}