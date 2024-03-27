import style from './Menu.module.css'

// Criacao das abas que estarao inseridas no Menu, ao todo serao 4 abas, Mas vou fazer 5:). Entao serao 5 href
export default function Menu() {
    return(
        <div className={style['wrap-menu']}>
            
            {/* Aba Inicio/Introducao */}
            <p>
                <a href={'/'}>Inicio</a>
            </p>
    {/* ------------------------------------------------------------- */}
             {/* Aba Cards/description*/}
             <p>
                <a href=""></a>
            </p>
    {/* ------------------------------------------------------------- */}
             {/* Aba CalcMedia */}
             <p>
                <a href=""></a>
            </p>
    {/* ------------------------------------------------------------- */}
             {/* Aba MapZap> */}
             <p>
                <a href=""></a>
            </p>
    {/* ------------------------------------------------------------- */}
             {/* Aba ApiRickyAndmMorty */}
             <p>
                <a href=""></a>
            </p>
    {/* ------------------------------------------------------------- */}
        </div>
    )
}