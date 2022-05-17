const crypto = require('crypto');
const public_key = process.env.PUBLIC_KEY;

exports.handle_req = (req) => {
    const signature = req.header['x-signature-ed25519'];
    const timestamp = req.header['x-signature-timestamp'];

    
}