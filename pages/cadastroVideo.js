import React, { useEffect, useState } from "react";
import PageDefault from "../components/PageDefault";
import useForm from "../hooks/useForm";
import FormField from "../components/FormField";
import Button from "../components/Button";
import videosRepository from "./api/repositories/videos";
import categoriasRepository from "./api/repositories/categorias";
import { useRouter } from "next/router";
import Link from "next/link";

function CadastroVideo() {
  const router = useRouter();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: "Video padrão",
    url: "https://www.youtube.com/watch?v=jOAU81jdi-c",
    categoria: "Front End",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  // console.log(categoryTitles)

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          // alert('Video Cadastrado com sucesso!!!1!');

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          videosRepository
            .create({
              titulo: values.titulo,
              descricao: values.descricao,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              console.log("Cadastrou com sucesso!");
              router.push("/");
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <br />
      <br />

      <Link href="/cadastrarCategoria">Cadastrar Categoria</Link>

      <br />
    </PageDefault>
  );
}

export default CadastroVideo;
