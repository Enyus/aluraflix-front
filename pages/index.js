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
      .then((categoriasComVideos) => {
        // console.log(categoriasComVideos.videos);
        setDadosIniciais(categoriasComVideos.videos);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(dadosIniciais)
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <PageDefault paddingAll={0}>
        {dadosIniciais.length === 0 && <div>Loading...</div>}

        {dadosIniciais.map((video, indice) => {
          if (indice === 0) {
            return (
              <div key={video.id}>
                <BannerMain
                  videoTitle={video.titulo}
                  url={video.url}
                  videoDescription={video.descricao}
                />
                <Carousel
                  ignoreFirstVideo
                  category={video.categoria}
                  videos={dadosIniciais.filter(
                    (videoDaCategoria) =>
                      videoDaCategoria.categoriaId == video.categoriaId
                  )}
                />
              </div>
            );
          }

          return <Carousel key={video.id} category={video.categoria} videos={ dadosIniciais.filter( videoDaCategoria => videoDaCategoria.categoriaId == video.categoriaId ) } />;
        })}
      </PageDefault>
    </>
  );
}

export default Home;
