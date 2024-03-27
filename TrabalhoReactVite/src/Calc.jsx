import style from './Calc.module.css'
import Menu from './components/Menu.jsx'

import { useState } from "react"

export const Calc = () => {
    const [numero01, setNumero01] = useState()
    const [numero02, setNumero02] = useState()
    const [numero03, setNumero03] = useState()
    const [numero04, setNumero04] = useState()
    const [numero05, setNumero05] = useState()
    const [respMedia, setRespMedia] = useState()
    
    // O handle irá passsar os dois nuemros para float
    // const handleCalc = () => {
    //     const num01 = parseFloat(numero01)
    //     const num02 = parseFloat(numero02)
    //     const num03 = parseFloat(numero03)
    //     const num04 = parseFloat(numero04)
    //     const num05 = parseFloat(numero05)

    //     if(!isNaN(num1) && !isNaN(num02) && !isNaN(num03) && !isNaN(num04) && !isNaN(num05)){
    //         setRespMedia((num01 + num02 + num03 + num04 + num05)/5)
    //     }
    // }

    const handleMedia = () => setRespMedia
    ((parseFloat(numero01) +
     parseFloat(numero02) +
     parseFloat(numero03) +
     parseFloat(numero04) +
     parseFloat(numero05))/5)

     return(
        <div>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1 className={style.H1}>Calculos</h1>
                        <h2>Media</h2>
                    <div className={style.wrapInputsCalc}>
                        {/* .target = Dispara os eventos, ou seja, aciona eles */}
                        <input className={style.inpStyle} text="text" placeholder="Digite a primeira nota" value={numero01} onChange=
                        {(e) => setNumero01(e.target.value)}/>

                        <input className={style.inpStyle} text="text" placeholder="Digite a segunda nota" value={numero02} onChange=
                        {(e) => setNumero02(e.target.value)}/>

                        <input className={style.inpStyle} text="text" placeholder="Digite a terceira nota" value={numero03} onChange=
                        {(e) => setNumero03(e.target.value)}/>

                        <input className={style.inpStyle} text="text" placeholder="Digite a quarta nota" value={numero04} onChange=
                        {(e) => setNumero04(e.target.value)}/>

                        <input className={style.inpStyle} text="text" placeholder="Digite a quinta nota" value={numero05} onChange=
                        {(e) => setNumero05(e.target.value)}/>
                        {/* Btn se fosse para calcular mais de uma conta. Este está relacionado ao "handleCalc", no caso, o geral */}
                        {/* <button onClick={handleCalc}>Calcular</button> */}
                    </div>

                    <div className={style.wrapInputsCalc}>
                        <div className={style.wrapMedia}>
                            {!isNaN(respMedia) && <p>{respMedia.toFixed(2)}</p>}
                            <button onClick={handleMedia} className={style['calc-btn']}>Calcular Media</button>
                        </div>
                    </div>
            </div>
        </div>
     )
}