// import your packages here
import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    // stub * just a place for non-component-specific stuff

    console.log('loaded');

    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    let closeButton = document.querySelector(".close-button"),
        name = document.querySelector(".user_info h2"),
        price = document.querySelector(".user_info h3"),
        description = document.querySelector(".user_info p"),
        userInfo = document.querySelector(".user_info");



    function handleDataSet(data) {
        // populate a lightbox with this data
        // and then open it
        let nameArea = data[0].name,
            priceArea = data[0].price,
            descriptionArea = data[0].description;
        name.textContent = nameArea;
        price.textContent = priceArea;
        description.textContent = descriptionArea;
        userInfo.classList.add("showLightbox");
    }

    function hidelightBox() {
        userInfo.classList.remove("showLightbox");
    }
    closeButton.addEventListener("click", hidelightBox);

    function retrieveProjectInfo(event) {
        // test for an ID
        // check for an id, and if there isnt one, then dont try the fetch call
        // because itll break (the php will choke)
        if (!event.target.id) { return }

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => handleDataSet(data)).catch(err => console.log(err));
    }


    function renderPortfolioThumbnails(thumbs) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        for (let user in thumbs) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;


            currentUserText[1].src = `images/${thumbs[user].image}`;
            currentUserText[1].id = thumbs[user].id;
            // add this new user to the view
            userSection.appendChild(currentUser);
        }
        userSection.addEventListener("click", retrieveProjectInfo);

    }

    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));
})();