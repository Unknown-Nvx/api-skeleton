class Keys {

    // constructor(){

    // }

    generateApiKey = () => {
        let key = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        for (let i = 0; i < 16; i++) {
            const rdm = Math.floor(Math.random() * chars.length);
            key += chars[rdm];
        }
        return key;
    }
}

module.exports = Keys;