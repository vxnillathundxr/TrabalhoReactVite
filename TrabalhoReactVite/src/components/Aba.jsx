// impotando o css das Abas, no caso, "Aba.module.css" 
import style from "./Aba.module.css"

// Criando uma função das Abas. Utilizando os "props" que seriam termos para serem definidos. Exemplo: {props.title} - tile = ""
export default function Aba(props){
    return(
        <div className={style.aba}>
            {/* Criacao do title a partir do props */}
            <h2>{props.title}</h2>
            {/* Criacao da image a partir do props */}
            <img src={props.imgSrc} alt={props.title} width={100} height={'auto'} />
            {/* Criacao da description a partir do props */}
            <p>{props.desc}</p>
        </div>
    )
}