import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    let contactsList = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contactsList = JSON.parse(data);
        return contactsList;
    } catch (err) {
        console.error(err);
    };
};

console.log(await getAllContacts());
