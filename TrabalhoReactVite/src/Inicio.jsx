import style from './Inicio.module.css'
import Menu from './components/Menu'

export default function Inicio() {
    return(
      <div className={style['wrap-pricipal']}>
        <Menu/>
        <h1 className={style.Cabecalho}>
          Olá mundo, estou realizando uma tentativa!
        </h1>
      </div>
    )
}
