/* =========================================================
   GO DEEP LIBRARY - MAIN JAVASCRIPT
   ========================================================= */

const categoryPages = {
    classics: "./classics/books.html",
    adventure: "./adventure/books.html",
    science: "./science/books.html",
    "science-fiction": "./scifi/books.html",
    scifi: "./scifi/books.html",
    mystery: "./detective/books.html",
    detective: "./detective/books.html"
};

const categoryInfo = {
    classics: {
        name: "Classics",
        icon: "🏛️",
        description: "Timeless stories"
    },

    adventure: {
        name: "Adventure",
        icon: "🗺️",
        description: "Journeys and exploration"
    },

    science: {
        name: "Science",
        icon: "🔬",
        description: "Discover how things work"
    },

    "science-fiction": {
        name: "Science Fiction",
        icon: "🚀",
        description: "Future worlds"
    },

    mystery: {
        name: "Mystery & Detective",
        icon: "🔎",
        description: "Solve the mystery"
    }
};


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const pageMap = {
        home: "homePage",
        categories: "categoriesPage",
        featured: "featuredPage",
        favorites: "favoritesPage"
    };

    const pageId = pageMap[pageName];

    if (pageId) {

        const selectedPage = document.getElementById(pageId);

        if (selectedPage) {
            selectedPage.classList.add("active");
        }
    }

    document.querySelectorAll(".nav-btn").forEach(function(button) {

        button.classList.remove("active");

        if (button.dataset.page === pageName) {
            button.classList.add("active");
        }

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   NAVIGATION BUTTONS
   ========================================================= */

function connectNavigation() {

    document.querySelectorAll(".nav-btn").forEach(function(button) {

        button.addEventListener("click", function() {

            const page = button.dataset.page;

            if (page) {
                showPage(page);
            }

        });

    });
}


/* =========================================================
   OPEN CATEGORY
   ========================================================= */

function openCategory(category) {

    if (!category) return;

    const categoryName = String(category)
        .toLowerCase()
        .trim();

    const page = categoryPages[categoryName];

    if (!page) {

        console.warn(
            "No books.html exists yet for category:",
            categoryName
        );

        return;
    }

    /*
       Use a clean relative URL.
       This prevents incorrect paths such as:
       /science-fiction/books.html
       when the real folder is:
       /scifi/books.html
    */

    window.location.href = page;
}


/* =========================================================
   CATEGORY CARDS
   ========================================================= */

function connectCategoryButtons() {

    document.querySelectorAll(".category-card")
        .forEach(function(button) {

            button.addEventListener("click", function() {

                openCategory(
                    button.dataset.category
                );

            });

        });
}


/* =========================================================
   EXPLORE
   ========================================================= */

function connectExploreButton() {

    const button =
        document.getElementById("exploreBtn");

    if (!button) return;

    button.addEventListener("click", function() {

        showPage("categories");

    });
}


/* =========================================================
   VIEW ALL CATEGORIES
   ========================================================= */

function connectViewAllCategories() {

    const button =
        document.getElementById("viewAllCategories");

    if (!button) return;

    button.addEventListener("click", function() {

        showPage("categories");

    });
}


/* =========================================================
   VIEW FEATURED
   ========================================================= */

function connectFeaturedButton() {

    const button =
        document.getElementById("viewFeatured");

    if (!button) return;

    button.addEventListener("click", function() {

        showPage("featured");

    });
}


/* =========================================================
   CREATE ALL CATEGORY CARDS
   ========================================================= */

function renderAllCategories() {

    const container =
        document.getElementById("allCategoriesGrid");

    if (!container) return;

    container.innerHTML = "";

    Object.keys(categoryInfo).forEach(function(category) {

        const info = categoryInfo[category];

        const button =
            document.createElement("button");

        button.className =
            "category-card " + category;

        button.dataset.category =
            category;

        button.innerHTML = `
            <span class="category-icon">
                ${info.icon}
            </span>

            <span class="category-name">
                ${info.name}
            </span>

            <span class="category-description">
                ${info.description}
            </span>
        `;

        button.addEventListener(
            "click",
            function() {
                openCategory(category);
            }
        );

        container.appendChild(button);

    });
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchBooks() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");

    if (!input || !results) return;

    const query =
        input.value.trim().toLowerCase();

    if (query === "") {

        results.innerHTML = "";

        return;
    }

    const matches =
        Object.keys(categoryInfo)
            .filter(function(category) {

                const info =
                    categoryInfo[category];

                return (
                    info.name
                        .toLowerCase()
                        .includes(query)

                    ||

                    info.description
                        .toLowerCase()
                        .includes(query)

                    ||

                    category.includes(query)
                );

            });

    results.innerHTML = "";

    if (matches.length === 0) {

        results.innerHTML = `
            <div class="search-result-empty">
                No matching categories found.
            </div>
        `;

        return;
    }

    matches.forEach(function(category) {

        const info =
            categoryInfo[category];

        const result =
            document.createElement("button");

        result.className =
            "search-result";

        result.innerHTML = `
            <span>${info.icon}</span>
            <span>${info.name}</span>
        `;

        result.addEventListener(
            "click",
            function() {
                openCategory(category);
            }
        );

        results.appendChild(result);

    });
}


function connectSearch() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    input.addEventListener(
        "input",
        searchBooks
    );

    input.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {
                searchBooks();
            }

        }
    );
}


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

function connectClearSearch() {

    const button =
        document.getElementById("clearSearch");

    if (!button) return;

    button.addEventListener(
        "click",
        function() {

            const input =
                document.getElementById("searchInput");

            const results =
                document.getElementById("searchResults");

            if (input) {
                input.value = "";
            }

            if (results) {
                results.innerHTML = "";
            }

        }
    );
}


/* =========================================================
   FAVORITES
   ========================================================= */

function getFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "libraryFavorites"
            ) || "[]"
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

    let favorites =
        getFavorites();

    if (favorites.includes(bookName)) {

        favorites =
            favorites.filter(function(book) {
                return book !== bookName;
            });

    } else {

        favorites.push(bookName);

    }

    saveFavorites(favorites);

    renderFavorites();
}


function renderFavorites() {

    const container =
        document.getElementById("favoriteBooks");

    if (!container) return;

    const favorites =
        getFavorites();

    if (favorites.length === 0) {

        container.innerHTML = `
            <div class="empty-library">

                <div class="empty-icon">
                    ♥
                </div>

                <h3>
                    No Favorites Yet
                </h3>

                <p>
                    Open a book and press the heart
                    button to save it here.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML = "";

    favorites.forEach(function(book) {

        const item =
            document.createElement("div");

        item.className =
            "book-card";

        item.innerHTML = `
            <h3>
                ${escapeHTML(book)}
            </h3>

            <button
                class="favorite-button"
                data-remove-favorite="${escapeHTML(book)}">

                Remove

            </button>
        `;

        container.appendChild(item);

    });
}


function connectFavoriteButtons() {

    document.addEventListener(
        "click",
        function(event) {

            const button =
                event.target.closest(
                    "[data-remove-favorite]"
                );

            if (!button) return;

            const book =
                button.dataset.removeFavorite;

            let favorites =
                getFavorites();

            favorites =
                favorites.filter(function(item) {
                    return item !== book;
                });

            saveFavorites(favorites);

            renderFavorites();

        }
    );
}


/* =========================================================
   FEATURED
   ========================================================= */

function renderFeaturedBooks() {

    const container =
        document.getElementById("featuredBooks");

    if (!container) return;

}


/* =========================================================
   HTML SECURITY
   ========================================================= */

function escapeHTML(text) {

    return String(text)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/* =========================================================
   START LIBRARY
   ========================================================= */

function initializeLibrary() {

    connectNavigation();

    connectCategoryButtons();

    connectExploreButton();

    connectViewAllCategories();

    connectFeaturedButton();

    connectSearch();

    connectClearSearch();

    renderAllCategories();

    renderFeaturedBooks();

    renderFavorites();

    showPage("home");

    console.log(
        "Go Deep Library loaded successfully."
    );
}


/* =========================================================
   START
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeLibrary
    );

} else {

    initializeLibrary();

}
