import React from 'react';
import Link from 'next/link';
import PageDefault from '../components/PageDefault';
import FormField from '../components/FormField';
import Button from '../components/Button';
import useForm from '../hooks/useForm';
import categoriasRepository from "./api/repositories/categorias";
import { useRouter } from 'next/router';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const router = useRouter()


  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        categoriasRepository
          .addCategoria({
            titulo: values.nome,
            cor: values.cor,
          })
          .then(() => {
            console.log("Cadastrou com sucesso!");
            router.push("/");
          });

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link href="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
