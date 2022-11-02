/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import BannerMain from "../components/BannerMain";
import PageDefault from "../components/PageDefault";
import categoriasRepository from "./api/repositories/categorias";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        // console.log(categoriasComVideos.videos[0]);
        setDadosIniciais(categoriasComVideos.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].titulo}
                url={dadosIniciais[0].url}
                videoDescription={dadosIniciais[0].descricao}
              />
              {/* <Carousel ignoreFirstVideo category={dadosIniciais[0]} /> */}
            </div>
          );
        }

        // return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
