import style from './Menu.module.css'

// Criacao das abas que estarao inseridas no Menu, ao todo serao 4 abas, Mas vou fazer 5:). Entao serao 5 href
export default function Menu() {
    return(
        <div className={style['wrap-menu']}>
                <h1>Abas</h1>
            <div className={style['Abas-href']}>
            {/* Aba Inicio/Introducao */}
            <p>
                <a href={'/'}>Inicio</a>
            </p>
    {/* ------------------------------------------------------------- */}
             {/* Aba Cards/description*/}
             <p>
                <a href='/cards'>Cards</a>
            </p>
    {/* ------------------------------------------------------------- */}
             {/* Aba CalcMedia */}
             <p>
                <a href='/calc'>CalcMediaNota</a>
            </p>
    {/* ------------------------------------------------------------- */}
             {/* Aba MapZap> */}
             <p>
                <a href='/MapZap'>MapZap</a>
            </p>
    {/* ------------------------------------------------------------- */}
             {/* Aba ApiRickyAndmMorty */}
             <p>
                <a href='/Requisicao'>RequisiçãoRM</a>
            </p>
    {/* ------------------------------------------------------------- */}
            </div>
        </div>
    )
}