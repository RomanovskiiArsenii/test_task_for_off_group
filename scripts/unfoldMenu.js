const unfoldMenu = (() => {
    const menuBtn = document.getElementById('menu_btn');
    const navPhone = document.getElementById('nav_phone');
    const crossBtn = document.getElementById('cross_btn');

    const unfold = () => {
        navPhone.style.display = 'flex';
    };
    const fold = () => {
        navPhone.style.display = 'none';
    };

    const unfoldAndCloseMenuOnClick = () => {
        menuBtn.addEventListener('click', unfold);
        crossBtn.addEventListener('click', fold);
    };

    const foldOnSizeOver820px = () => {
        if (window.innerWidth > 820) fold();
    };

    return {
        unfoldAndCloseMenuOnClick: unfoldAndCloseMenuOnClick,
        foldOnSizeOver820px: foldOnSizeOver820px,
    };
})();

export default unfoldMenu;
