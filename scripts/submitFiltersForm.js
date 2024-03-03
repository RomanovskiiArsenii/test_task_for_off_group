const submitFiltersForm = (() => {
    const filtersForm = document.getElementById('filters');
    const filtersCheckboxes = filtersForm.querySelectorAll('input[type="checkbox"]');

    const sendAJAXRequestAndLog = () => {
        const filtersForm = document.getElementById('filters');
        const formData = new FormData(filtersForm);

        const chosenFilters = [];

        formData.forEach((value, key) => {
            chosenFilters.push(`${key}=${value}`);
        });

        console.log(`AJAX request with chosen filters: ${chosenFilters}`);

        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', 'BACKEND_LOGIC', true);
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4 && xhr.status === 200) {
        //         console.log(xhr.responseText);
        //     }
        // };
        // xhr.send(formData);
    };

    const sendRequestOnFiltersCheck = () => {
        for (var i = 0; i < filtersCheckboxes.length; i++) {
            filtersCheckboxes[i].addEventListener('click', sendAJAXRequestAndLog, false);
        }
    };

    return sendRequestOnFiltersCheck;
})();

export default submitFiltersForm;
