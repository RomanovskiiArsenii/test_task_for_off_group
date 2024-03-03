const switchTabs = (() => {
    const tabs = document.getElementsByClassName('tab');
    const tabsBtns = document.getElementsByClassName('tab_btn');

    const hideTabsAndUnfocusBtns = () => {
        for (let i = 0; i < tabs.length; i++) {
            if (!tabs[i].classList.contains('hidden')) {
                tabs[i].classList.add('hidden');
            }
            if (tabsBtns[i].classList.contains('article_focus')) {
                tabsBtns[i].classList.remove('article_focus');
            }
        }
    };

    const showTabAndFocusBtnOnClick = () => {
        for (let i = 0; i < tabs.length; i++) {
            tabsBtns[i].onclick = () => {
                hideTabsAndUnfocusBtns();
                tabsBtns[i].classList.add('article_focus');
                tabs[i].classList.remove('hidden');
            };
        }
    };

    return showTabAndFocusBtnOnClick;
})();

export default switchTabs;
