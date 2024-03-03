const switchGalleryImages = (() => {
    const productImage = document.getElementById('product_img');
    const thumbnails = document.getElementsByClassName('thumbnail');

    const switchImage = (index) => {
        productImage.src = thumbnails[index].src;
    };

    const switchImageOnClick = () => {
        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].onclick = () => {
                switchImage(i);
            };
        }
    };

    return switchImageOnClick;
})();

export default switchGalleryImages;
