import changeQuantity from './changeQuantity.js';
import colorCart from './colorCart.js';
import colorInvalidEmail from './colorInvalidEmail.js';
import colorVisitedLinks from './colorVisitedLinks.js';
import submitFiltersForm from './submitFiltersForm.js';
import switchGalleryImages from './switchGalleryImages.js';
import switchTabs from './switchTabs.js';
import unfoldMenu from './unfoldMenu.js';

window.addEventListener('load', changeQuantity);
window.addEventListener('load', colorCart);
window.addEventListener('load', colorInvalidEmail);
window.addEventListener('load', colorVisitedLinks);
window.addEventListener('load', submitFiltersForm);
window.addEventListener('load', switchTabs);
window.addEventListener('load', switchGalleryImages);
window.addEventListener('load', unfoldMenu.unfoldAndCloseMenuOnClick);
window.addEventListener('resize', unfoldMenu.foldOnSizeOver820px);
