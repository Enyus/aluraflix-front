import URL_BACKEND_TOP from "../../../config/index";

const URL_VIDEOS = `${URL_BACKEND_TOP}/categoriasapi`;
const URL_CATEGORIAS = `${URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIAS}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2Njg3MTA5ODksImV4cCI6MTY3Mzg5NDk4OX0.3YWufYe2PLIEqL_c1QkGYIwWCRiLBjJQ8ZePtt_sHwk',
    },
  })
    .then(async (respostaDoServidor) => {
    // console.log(respostaDoServidor)
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      // console.log(resposta.categorias)
      return resposta.categorias;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

function getAllWithVideos() {
  return fetch(`${URL_VIDEOS}`).then(async (respostaDoServidor) => {
    // console.log(respostaDoServidor)
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      // console.log(resposta);
      return resposta;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

function addCategoria(objetoDaCategoria) {
  console.log(objetoDaCategoria);
  return fetch(`${URL_CATEGORIAS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2Njg3MTA5ODksImV4cCI6MTY3Mzg5NDk4OX0.3YWufYe2PLIEqL_c1QkGYIwWCRiLBjJQ8ZePtt_sHwk',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error("Não foi possível cadastrar os dados :(");
  });
}

export default { getAllWithVideos, getAll, addCategoria };
