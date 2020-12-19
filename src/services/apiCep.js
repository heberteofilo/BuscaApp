import axios from 'axios';

export const consultarEndereco = async (cep) => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const endereco = {
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf,
    }
    return endereco;
};