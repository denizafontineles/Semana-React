import React from 'react';

const ComentarioAutor = props => {
    return (
        <div>
            <h1>{props.nome}</h1>
            <h2 className="titulo">{props.titulo}</h2>
        </div>
    )
}

const ComentarioTexto = props =>{
    return(
        <p>{props.comentario}</p>
    )
}


const ComentarioDetalhes = props =>{
      return (

        <div className="container">
            <ComentarioAutor
                nome={props.nome}
                titulo={props.titulo}
            />
            <hr />

            <ComentarioTexto
                comentario = {props.comentario}
            />
        </div>
    )
}

const Comentario = props =>{
    return (
    <div className="container-dados">
        <img className="tamanho-img" src = {props.img} />
        <ComentarioDetalhes
        nome = {props.nome}
        titulo = {props.titulo}
        comentario = {props.comentario}
        />
    </div>
    )
}


  
export default Comentario