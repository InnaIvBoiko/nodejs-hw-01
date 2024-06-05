import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
    let contactsList = [];
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        contactsList = JSON.parse(data);

        for (let i = 0; i < contactsList.length; i += 1) {
            if (Math.random() < 0.5) {
                contactsList.splice(i, 1);
                i -= 1;
            };
        };

        fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2), 'utf8');
        return;
    } catch (err) {
        console.error(err);
    };
};

await thanos();
