/**
 * @description checks if the mailservice is available by the system
 * @param {object} transporter the nodemailer instance that is going to be used to setup the mailservice
 * @returns {object} returns the state of the mailservice, if its running on not.
 */
const isNodemailerServiceAvailable = async (transporter) => {
    let verifyResult = null;
    try {
        verifyResult = transporter.verify();
        return verifyResult;
    } catch (e) {
        return false;
    }
}

module.exports = {
    isMailServiceAvailable
}