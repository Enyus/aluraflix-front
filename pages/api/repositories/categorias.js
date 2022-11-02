import URL_BACKEND_TOP from '../../../config/index';

const URL_CATEGORIES = `${URL_BACKEND_TOP}/categorias`;
const URL_VIDEOS = `${URL_BACKEND_TOP}/videos`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      // console.log(respostaDoServidor)
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      
      throw new Error('Não foi possível pegar os dados :(');
    });
  }
  
  function getAllWithVideos() {
    return fetch(`${URL_VIDEOS}`)
    .then(async (respostaDoServidor) => {
      // console.log(respostaDoServidor)
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        // console.log(resposta);
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default { getAllWithVideos, getAll };
