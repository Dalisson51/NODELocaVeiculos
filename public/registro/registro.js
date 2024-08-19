import { urlBaseAPI, urlBaseFront } from "../url/base.js";



function realizaRegistro() {

    const data = new FormData(document.forms[0]);

    const opcoes = {

        method: 'post',

        credentials: 'include',

        body: new URLSearchParams(data)

    };

    /*fetch(`${urlBaseAPI}/user`, opcoes)

        .then((res) => {

            return res.json();

        })

        .then((json) => {

            if (json.registrado) {

                window.location = `${urlBaseFront}/index.html`;

            } else {

                alert(json.mensagem);

            }

        })
*/
    fetch(`${urlBaseAPI}/user`, opcoes)
    .then((res) => {
        if (!res.ok) {
            throw new Error('Erro na requisição: ' + res.status);
        }
        return res.text(); // Pega o texto da resposta
    })
    .then((text) => {
        if (text) {
            return JSON.parse(text); // Converte o texto para JSON
        } else {
            throw new Error('Resposta vazia');
        }
    })
    .then((json) => {
        if (json.registrado) {
            window.location = `${urlBaseFront}/index.html`;
        } else {
            alert(json.mensagem);
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao processar o registro.');
    });
}



async function checkSeExisteRegistro() {

    const opcoes = {

        method: 'get',

        credentials: 'include'

    };

    const res = await fetch(`${urlBaseAPI}/user/existeusuario`, opcoes);

    const json = await res.json();

    if(json.existeusuario) {

        return true;

    } else {

        return false;

    }

}



export { realizaRegistro, checkSeExisteRegistro };
