import { useState } from "react";
// Se der erro é pq estou importando os componentes em "jsx"
import Aba from './components/Aba.jsx';
import Menu from "./components/Menu";
import style from '/src/Cards.module.css';

import ImgReact from "./assets/img/ImgReact.png"
import ImgVite from "./assets/img/ImgVite.jpg"
import ImgAxios from "./assets/img/ImgAxios.webp"
import ImgReactRouterDom from "./assets/img/ImgReactRouterDom.png"
import ImgNpm from "./assets/img/ImgNpm.png"

export const Cards = () => {
    const [show, setShow] = useState('all');

    return(
        <>
            <Menu/>
            <section className={style['wrap-card']}>
                <h1>Cards</h1>
                    <div className={style['wrap-card-tid']}>
                        {show === 'react' && <Aba title='REACT' imgSrc={ImgReact} desc='Duas frases'/>}
                        {show === 'vite' && <Aba title='VITE' imgSrc={ImgVite} desc='Duas frases'/>}
                        {show === 'axios' && <Aba title='AXIOS' imgSrc={ImgAxios} desc='Duas frases'/>}
                        {show === 'reactRouterDom' && <Aba title='RRT' imgSrc={ImgReactRouterDom} desc='Duas frases'/>}
                        {show === 'npm' && <Aba title='NPM' imgSrc={ImgNpm} desc='Duas frases'/>}
                        <div className={style.all}>
                        {show === 'all' &&
                        <>
                        <Aba title='REACT' imgSrc={ImgReact} desc='Duas frases'/>
                        <Aba title='VITE' imgSrc={ImgVite} desc='Duas frases'/>
                        <Aba title='AXIOS' imgSrc={ImgAxios} desc='Duas frases'/>
                        <Aba title='RRT' imgSrc={ImgReactRouterDom} desc='Duas frases'/>
                        <Aba title='NPM' imgSrc={ImgNpm} desc='Duas frases'/>
                        </>
                    }
                        </div>
                    </div>

                <div className={style['wrap-btn-card']}>
                    <button className={style.btnCard} onClick={() => setShow('react')}>REACT</button>
                    <button className={style.btnCard} onClick={() => setShow('vite')}>VITE</button>
                    <button className={style.btnCard} onClick={() => setShow('axios')}>AXIOS</button>
                    <button className={style.btnCard} onClick={() => setShow('reactRouterDom')}>RRD</button>
                    <button className={style.btnCard} onClick={() => setShow('npm')}>NPM</button>
                    <button className={style.btnCard } onClick={() => setShow('all')}>ALL</button>
                </div>
            </section>
        </>
    )


}



