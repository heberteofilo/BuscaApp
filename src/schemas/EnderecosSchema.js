// const EnderecosSchema = {
//     name: 'Enderecos',
//     primaryKey: 'id',
//     properties: {
//         id: 'string',
//         cidade: 'string',
//         uf: 'string',
//         bairro: 'string',
//         rua: 'string',
//     }
// };

export default class EnderecosSchema {
    static schema = {
        name: 'Enderecos',
        primaryKey: 'id',       
        properties: {
            id: { type: 'int', indexed: true },
            validade: 'string',
            message: 'string',
            logradouro: 'string',
            bairro: 'string',
            localidade: 'string',
            uf: 'string',
        }
    };
}