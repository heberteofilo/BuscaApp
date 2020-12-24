import Realm from 'realm';
import EnderecosSchema from '../schemas/EnderecosSchema';

// export const getRealm = async () => {
//     const realm = await Realm.open({
//         schema: [EnderecosSchema],
//         schemaVersion: 1,
//     });
// };

export default function getRealm() {
    return Realm.open({
        schema: [EnderecosSchema],
        schemaVersion: 1,
    });
}