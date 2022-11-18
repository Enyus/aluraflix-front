/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import BannerMain from "../components/BannerMain";
import PageDefault from "../components/PageDefault";
import Carousel from "../components/Carousel";
import categoriasRepository from "./api/repositories/categorias";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((repostaDoServidor) => {
        // console.log(repostaDoServidor)
        let arrayCategorias = []
        repostaDoServidor.videos.map( video => {
          if (!arrayCategorias.includes(video.categoria.id)){
            arrayCategorias.push(video.categoria.id)
          }
        });
        setCategorias(arrayCategorias);
        setDadosIniciais(repostaDoServidor.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>AluraFlix</title>
      </Head>

      <PageDefault paddingAll={0}>
        {dadosIniciais.length === 0 && <div>Loading...(O primeiro carregamento pode demorar um pouco para o servidor do Render ser iniciado)</div>}

        {categorias.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais.find(video => video.categoria.id == categoria).titulo}
                  url={dadosIniciais.find(video => video.categoria.id == categoria).url}
                  videoDescription={dadosIniciais.find(video => video.categoria.id == categoria).descricao}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais.find(video => video.categoria.id == categoria).categoria}
                  videos={dadosIniciais.filter(
                    (videoDaCategoria) =>
                      videoDaCategoria.categoriaId == categoria
                  )}
                />
              </div>
            );
          }

          return (
            <Carousel 
              key={categoria.id} 
              category={dadosIniciais.find(video => video.categoria.id == categoria).categoria} 
              videos={ dadosIniciais.filter( videoDaCategoria => videoDaCategoria.categoriaId == categoria ) } 
            />);
        })}
      </PageDefault>
    </>
  );
}

export default Home;
