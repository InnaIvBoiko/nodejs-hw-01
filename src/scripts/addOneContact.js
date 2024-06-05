import fs  from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
    let contactsList = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contactsList = JSON.parse(data);

        const newContact = createFakeContact();
        const updatedContacts = contactsList.concat(newContact);
        fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf8');
    } catch (err) {
        console.error(err);
    };
};

await addOneContact();
