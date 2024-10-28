exports.handler = async (event) => {
    const request = JSON.parse(event.body);
    const userMessage = request.message.toLowerCase();

    let responseText;

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return 'Hello! How can I assist you today?';
    }
    if (lowerCaseMessage.includes('info') || lowerCaseMessage.includes('cost')) {
        return 'Visual Communication Design (DKV) is a discipline that focuses on conveying messages or information through visual media.';
    }
    if (lowerCaseMessage.includes('support') || lowerCaseMessage.includes('help')) {
        return 'Our support team is available 24/7. You can ask me here, or email dkvmetschoo@yahoo.com for detailed assistance.';
    }
    if (lowerCaseMessage.includes('student')) {
        return 'There are 16 DKV students at Metland School.';
    }
    if (lowerCaseMessage.includes('contact')) {
        return 'You can contact us directly at dkvmetschoo@yahoo.com or call us at +62857-7656-8948.';
    }
    if (lowerCaseMessage.includes('location') || lowerCaseMessage.includes('office')) {
        return 'Perum. Metland Cibitung Desa Telagamurni Kec. Cikarang Barat Kab. Bekasi Prov. Jawa Barat';
    }
    return 'I am here to help! Could you provide more details so I can assist you better?';

};
