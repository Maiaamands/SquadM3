import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import "./Home.css";

const Home = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async() => {
     
      try {

        const response = await blogFetch.get("/ficcaocientifica");
        
        const data = response.data;

        setPosts(data);
      } catch (error) {
        console.log(error);
      }

    };

    useEffect(() => {
      getPosts();
    }, []);

    

  return <div className="home">
    <h1>livros</h1>
    {posts.length === 0 ? <p>Carregando...</p> : (
      posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.nome}</h2>
          <p>{post.autor}</p>
          <p>{post.ano}</p>
          <p>{post.sinopse}</p>
          <img src={post.imagem}></img>
          <Link to={`/ficcaocientifica/${post.id}`} className="btn">Ver mais</Link>
        </div>
      ))
    )}
  </div>
}

export default Home