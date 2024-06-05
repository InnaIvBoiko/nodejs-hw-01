import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    let contactsList = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contactsList = JSON.parse(data);
        return contactsList.length;
    } catch (err) {
        console.error(err);
    };
};

console.log(await countContacts());
