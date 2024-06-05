import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    let contactsList = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contactsList = JSON.parse(data);
        const newContactsList = [];
        for (let i = 0; i < number; i++) {
            newContactsList.push(createFakeContact());
        };

        const updatedContacts = contactsList.concat(newContactsList);
        fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf8');
        return;
    } catch (err) {
        console.error(err);
    };
};

await generateContacts(5);

await generateContacts(3);
