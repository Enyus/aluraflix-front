import URL_BACKEND_TOP from "../../../config/index";

const URL_CATEGORIES = `${URL_BACKEND_TOP}/categorias`;
const URL_VIDEOS = `${URL_BACKEND_TOP}/videos`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2Njg3MTA5ODksImV4cCI6MTY3Mzg5NDk4OX0.3YWufYe2PLIEqL_c1QkGYIwWCRiLBjJQ8ZePtt_sHwk",
    },
  }).then(async (respostaDoServidor) => {
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
  return fetch(`${URL_VIDEOS}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2Njg3MTA5ODksImV4cCI6MTY3Mzg5NDk4OX0.3YWufYe2PLIEqL_c1QkGYIwWCRiLBjJQ8ZePtt_sHwk",
    },
  }).then(async (respostaDoServidor) => {
    // console.log(respostaDoServidor)
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      // console.log(resposta);
      return resposta;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

export default { getAllWithVideos, getAll };
