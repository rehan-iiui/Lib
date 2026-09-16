/* =========================================================
   LIBRARY APP - MAIN JAVASCRIPT
   ========================================================= */

/* ================= DATA ================= */

const categories = {
    adventure: "Adventure",
    classics: "Classics",
    science: "Science",
    scifi: "Sci-Fi",
    detective: "Detective"
};


/* ================= PAGE NAVIGATION ================= */

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= CATEGORY OPENING ================= */

function openCategory(category) {

    if (!category) return;

    const categoryName = category.toLowerCase();

    const paths = {
        adventure: "adventure/books.html",
        classics: "classics/books.html",
        science: "science/books.html",
        scifi: "scifi/books.html",
        "sci-fi": "scifi/books.html",
        detective: "detective/books.html"
    };

    if (paths[categoryName]) {
        window.location.href = paths[categoryName];
    }
}


/* ================= HOME BUTTON ================= */

function goHome() {
    window.location.href = "index.html";
}


/* ================= BACK BUTTON ================= */

function goBack() {

    if (document.referrer) {
        history.back();
    } else {
        goHome();
    }
}


/* ================= SEARCH ================= */

function searchBooks() {

    const searchInput =
        document.getElementById("searchInput") ||
        document.querySelector('input[type="search"]');

    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();

    const books = document.querySelectorAll(
        ".book-card, .summary-card, .book"
    );

    books.forEach(book => {

        const text = book.textContent.toLowerCase();

        if (query === "" || text.includes(query)) {
            book.style.display = "";
        } else {
            book.style.display = "none";
        }

    });
}


/* ================= CLEAR SEARCH ================= */

function clearSearch() {

    const searchInput =
        document.getElementById("searchInput") ||
        document.querySelector('input[type="search"]');

    if (searchInput) {
        searchInput.value = "";
    }

    const books = document.querySelectorAll(
        ".book-card, .summary-card, .book"
    );

    books.forEach(book => {
        book.style.display = "";
    });
}


/* ================= FAVORITES ================= */

function getFavorites() {

    try {
        return JSON.parse(
            localStorage.getItem("libraryFavorites") || "[]"
        );
    } catch (error) {
        return [];
    }
}


function saveFavorites(favorites) {

    localStorage.setItem(
        "libraryFavorites",
        JSON.stringify(favorites)
    );
}


function toggleFavorite(bookName) {

    if (!bookName) return;

    let favorites = getFavorites();

    if (favorites.includes(bookName)) {

        favorites = favorites.filter(
            book => book !== bookName
        );

    } else {

        favorites.push(bookName);

    }

    saveFavorites(favorites);

    renderFavorites();

    updateFavoriteButtons();
}


function isFavorite(bookName) {

    return getFavorites().includes(bookName);
}


/* ================= RENDER FAVORITES ================= */

function renderFavorites() {

    const container =
        document.getElementById("favoritesList") ||
        document.querySelector(".favorites-list");

    if (!container) return;

    const favorites = getFavorites();

    if (favorites.length === 0) {

        container.innerHTML = `
            <p class="empty-message">
                No favorite books yet.
            </p>
        `;

        return;
    }

    container.innerHTML = "";

    favorites.forEach(book => {

        const item = document.createElement("div");

        item.className = "favorite-book";

        item.innerHTML = `
            <span>${escapeHTML(book)}</span>
            <button onclick="toggleFavorite('${escapeAttribute(book)}')">
                ★
            </button>
        `;

        container.appendChild(item);

    });
}


/* ================= FAVORITE BUTTONS ================= */

function updateFavoriteButtons() {

    const buttons = document.querySelectorAll(
        "[data-favorite], .favorite-btn"
    );

    buttons.forEach(button => {

        const bookName =
            button.dataset.favorite ||
            button.dataset.book;

        if (!bookName) return;

        if (isFavorite(bookName)) {
            button.classList.add("active");
            button.textContent = "★";
        } else {
            button.classList.remove("active");
            button.textContent = "☆";
        }

    });
}


/* ================= FEATURED BOOKS ================= */

function renderFeaturedBooks() {

    const container =
        document.getElementById("featuredBooks") ||
        document.querySelector(".featured-books");

    if (!container) return;

    /*
       This function intentionally does not replace existing
       featured-book HTML if you already created it in index.html.
    */

    updateFavoriteButtons();
}


/* ================= ALL CATEGORIES ================= */

function renderAllCategories() {

    /*
       Your category cards/buttons are already in index.html.
       This function connects them to the correct category pages.
    */

    document.querySelectorAll(
        "[data-category]"
    ).forEach(element => {

        element.addEventListener("click", function () {

            const category =
                this.dataset.category;

            openCategory(category);

        });

    });
}


/* ================= CATEGORY BUTTONS ================= */

function connectCategoryButtons() {

    const categoryButtons = {

        adventure: [
            "adventureBtn",
            "adventureButton",
            "exploreAdventure"
        ],

        classics: [
            "classicsBtn",
            "classicsButton",
            "exploreClassics"
        ],

        science: [
            "scienceBtn",
            "scienceButton",
            "exploreScience"
        ],

        scifi: [
            "scifiBtn",
            "sciFiBtn",
            "scifiButton",
            "exploreSciFi"
        ],

        detective: [
            "detectiveBtn",
            "detectiveButton",
            "exploreDetective"
        ]

    };


    Object.keys(categoryButtons).forEach(category => {

        categoryButtons[category].forEach(id => {

            const button =
                document.getElementById(id);

            if (!button) return;

            button.addEventListener(
                "click",
                function () {
                    openCategory(category);
                }
            );

        });

    });

}


/* ================= EXPLORE BUTTON ================= */

function connectExploreButtons() {

    const exploreButtons = document.querySelectorAll(
        "#exploreBtn, #exploreButton, .explore-btn, .explore-button"
    );

    exploreButtons.forEach(button => {

        button.addEventListener("click", function () {

            const firstCategory =
                document.querySelector("[data-category]");

            if (firstCategory) {

                openCategory(
                    firstCategory.dataset.category
                );

            } else {

                showPage("categories");

            }

        });

    });

}


/* ================= HOME / NAVIGATION BUTTONS ================= */

function connectNavigationButtons() {

    const homeButtons = document.querySelectorAll(
        "#homeBtn, #homeButton, .home-btn"
    );

    homeButtons.forEach(button => {

        button.addEventListener("click", goHome);

    });


    const backButtons = document.querySelectorAll(
        "#backBtn, #backButton, .back-btn"
    );

    backButtons.forEach(button => {

        button.addEventListener("click", goBack);

    });


    const favoritesButtons = document.querySelectorAll(
        "#favoritesBtn, #favoritesButton, .favorites-btn"
    );

    favoritesButtons.forEach(button => {

        button.addEventListener("click", function () {
            showPage("favorites");
            renderFavorites();
        });

    });


    const categoriesButtons = document.querySelectorAll(
        "#categoriesBtn, #categoriesButton, .categories-btn"
    );

    categoriesButtons.forEach(button => {

        button.addEventListener("click", function () {
            showPage("categories");
        });

    });

}


/* ================= BOOK FAVORITES ================= */

function connectFavoriteButtons() {

    document.addEventListener("click", function (event) {

        const button =
            event.target.closest(
                "[data-favorite], .favorite-btn"
            );

        if (!button) return;

        const bookName =
            button.dataset.favorite ||
            button.dataset.book;

        if (!bookName) return;

        toggleFavorite(bookName);

    });

}


/* ================= ENTER KEY SEARCH ================= */

function connectSearch() {

    const searchInput =
        document.getElementById("searchInput") ||
        document.querySelector('input[type="search"]');

    if (!searchInput) return;

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            searchBooks();
        }

    });

}


/* ================= HTML SECURITY HELPERS ================= */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function escapeAttribute(text) {

    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");
}


/* ================= GLOBAL FUNCTIONS ================= */

window.showPage = showPage;
window.openCategory = openCategory;
window.goHome = goHome;
window.goBack = goBack;
window.searchBooks = searchBooks;
window.clearSearch = clearSearch;
window.toggleFavorite = toggleFavorite;
window.renderFavorites = renderFavorites;
window.renderFeaturedBooks = renderFeaturedBooks;
window.renderAllCategories = renderAllCategories;


/* ================= INITIALIZE ================= */

function initializeLibrary() {

    renderFeaturedBooks();

    renderAllCategories();

    renderFavorites();

    connectCategoryButtons();

    connectExploreButtons();

    connectNavigationButtons();

    connectFavoriteButtons();

    connectSearch();

    updateFavoriteButtons();

}


/* ================= START APP ================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeLibrary
    );

} else {

    initializeLibrary();

}
