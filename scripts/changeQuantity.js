const changeQuantity = (() => {
    const quantity = document.getElementById('quantity');
    const minusBtn = document.getElementById('minus_btn');
    const plusBtn = document.getElementById('plus_btn');
    let current = parseInt(quantity.innerText);

    const plusQty = () => {
        current++;
        quantity.innerText = current;
    };
    const minusQty = () => {
        current = current > 1 ? current - 1 : current;
        quantity.innerText = current;
    };

    const changeQuantutyOnClick = () => {
        minusBtn.addEventListener('click', minusQty);
        plusBtn.addEventListener('click', plusQty);
    };

    return changeQuantutyOnClick;
})();

export default changeQuantity;
