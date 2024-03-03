const colorInvalidEmail = (() => {
    const subscribeBtn = document.getElementById('subscribe_btn');
    const emailField = document.getElementById('subscribers_email');
    const invalidMsg = document.getElementById('invalid_email_msg');

    const colorInvalidInputAndShowMessage = (e) => {
        if (!emailField.checkValidity()) {
            e.preventDefault();
            invalidMsg.style.display = 'block';
            emailField.classList.add('invalid_email');
        }
    };

    const uncolorInvalidInputAndHideMessage = () => {
        invalidMsg.style.display = 'none';
        if (emailField.classList.contains('invalid_email')) {
            emailField.classList.remove('invalid_email');
        }
    };

    const colorInvalidEmailInit = () => {
        subscribeBtn.addEventListener('click', colorInvalidInputAndShowMessage);
        emailField.addEventListener('click', uncolorInvalidInputAndHideMessage);
    };

    return colorInvalidEmailInit;
})();

export default colorInvalidEmail;
