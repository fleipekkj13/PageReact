import './stylesBanner/main.css'
import { useEffect, useState } from 'react'
export default function Banner(){



    window.addEventListener('scroll', () => {
        const blackBanner = document.getElementById('blackBanner');
        const bannerContent = document.getElementById('bannerContent');
        const startBanner = document.getElementById('startBanner')
        let value = window.scrollY;
        const h1Banner = document.getElementById('h1Banner');
        const pBanner = document.getElementById('bBanner');

        const starkBack = document.getElementById('starkBackBanner');

        if(value > 50){
            blackBanner.style.transform = 'translateX(0)'
            bannerContent.classList.add('black')
            startBanner.style.display = 'none';
            h1Banner.innerText="Esqueci o...\n'Futuro-Bilionário!'";
            pBanner.style.display = 'none';
            starkBack.classList.add('black');
            starkBack.style.display = 'block';
            
            
        }else{
            blackBanner.style.transform = 'translateX(-100vw)'
            bannerContent.classList.remove('black');
            h1Banner.innerText = "hello, i'm\nFelipe Liandro"
            startBanner.style.display = 'block';
            pBanner.style.display = 'block';
            starkBack.style.display = 'none';
            starkBack.classList.remove('black');
        }

    })

    return(
        <div>
            <div className='mainBannerWhite'>
                <div id='startBanner' className="startBanner"></div>
                <div id='starkBackBanner' className='starkBackBanner black'></div>
                <div id='bannerContent' className="BannerContent">
                    <h1 id='h1Banner'>hello, i'm<br />Felipe Liandro</h1>
                    <div id="bBanner">
                        <p>Designer, <b id='boldTextBanner'>Programador</b>, Músico, <b id='boldTextBanner'>Playboy</b>, e muito mais...</p>
                    </div>
                </div>
                <div className="BannerInputFields">
                    <h1>Receba Novidades!</h1>
                    <p>Tenha todas as megas atualiazações e novidades direto no seu e-mail, para ficar por dentro de tudo!</p>
                    <div className="wrapper">
                        <input type="text" placeholder='Insira.seu@email.aqui'/>
                        <button class="material-symbols-outlined">send</button>
                    </div>
                </div>
            </div>
            <div id='blackBanner' className='mainBannerBlack'></div>
        </div>
    )
}