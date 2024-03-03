const colorCart = (() => {
    const cart = document.getElementById('cart');
    const cartSum = document.getElementById('sum_in_cart');

    const colorCartIfContainsSum = () => {
        if (cartSum.textContent && cartSum.textContent != '0') {
            cartSum.style.display = 'block';
            cart.classList.remove('grayed');
        }

        if (parseInt(cartSum.textContent) > 99) {
            cartSum.textContent = '99';
        }
    };

    return colorCartIfContainsSum;
})();

export default colorCart;
