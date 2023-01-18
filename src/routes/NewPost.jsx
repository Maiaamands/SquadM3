import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = {nome, autor, ano, sinopse, imagem, userId: 1};

    await blogFetch.post("/ficcaocientifica", {
      body: post,
    });

    navigate("/");
  };
 
  return (
    <div className="new-post">
      <h2>Inserir novo livro:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="nome">Título</label>
          <input 
          type="text" 
          name="nome" 
          id="nome" 
          placeholder='Escreva o nome do livro'
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="autor">Autor</label>
          <input 
          type="text" 
          name="autor" 
          id="autor" 
          placeholder='Escreva o nome do autor'
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="ano">Ano de publicação</label>
          <input 
          type="number" 
          name="ano" 
          id="ano" 
          placeholder='Escreva o ano de publicação'
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="imagem">Imagem do livro</label>
          <input 
          type="text" 
          name="imagem" 
          id="imagem" 
          placeholder='Coloque o link da imagem'
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="sinopse">Sinopse</label>
          <textarea 
          name="sinopse" 
          id="sinopse" 
          placeholder="Escreva a sinopse"
          onChange={(e) => setBody(e.target.value)}>
          </textarea>
        </div>
        <input type="submit" value="Adicionar" className="btn"/>
      </form>
    </div>
  )
}

export default NewPost