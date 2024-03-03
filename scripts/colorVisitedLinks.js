const colorVisitedLinks = (() => {
    const linksWithIco = document.getElementsByClassName('link_with_ico');

    const colorLinkOnClick = () => {
        for (let i = 0; i < linksWithIco.length; i++) {
            linksWithIco[i].onclick = () => {
                linksWithIco[i].classList.remove('grayed');
            };
        }
    };

    return colorLinkOnClick;
})();

export default colorVisitedLinks;
