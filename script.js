/* =========================================================
   GO DEEP LIBRARY - MAIN JAVASCRIPT
   ========================================================= */


/* ================= CATEGORY DATA ================= */

const categoryPages = {
    classics: "classics/books.html",
    adventure: "adventure/books.html",
    science: "science/books.html",
    "science-fiction": "scifi/books.html",
    scifi: "scifi/books.html",
    mystery: "detective/books.html",
    detective: "detective/books.html",
    fantasy: "fantasy/books.html",
    history: "history/books.html",
    geography: "geography/books.html",
    children: "children/books.html",
    biographies: "biographies/books.html"
};


/* ================= CATEGORY INFORMATION ================= */

const categoryInfo = {
    classics: {
        name: "Classics",
        icon: "🏛️",
        description: "Timeless stories"
    },

    adventure: {
        name: "Adventure",
        icon: "🗺️",
        description: "Journeys & exploration"
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
    },

    fantasy: {
        name: "Fantasy",
        icon: "🏰",
        description: "Magical worlds"
    },

    history: {
        name: "History",
        icon: "📜",
        description: "Learn from the past"
    },

    geography: {
        name: "Geography & Travel",
        icon: "🌍",
        description: "Explore our world"
    },

    children: {
        name: "Children's Books",
        icon: "👦",
        description: "Stories for young readers"
    },

    biographies: {
        name: "Biography & Famous People",
        icon: "🧠",
        description: "Lives that shaped history"
    }
};


/* ================= PAGE NAVIGATION ================= */

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });


    const pageMap = {
        home: "homePage",
        categories: "categoriesPage",
        featured: "featuredPage",
        favorites: "favoritesPage",
        categoryBooks: "categoryBooksPage",
        book: "bookPage",
        reader: "readerPage"
    };


    const realPageId = pageMap[pageName] || pageName;

    const selectedPage =
        document.getElementById(realPageId);


    if (selectedPage) {
        selectedPage.classList.add("active");
    }


    document.querySelectorAll(".nav-btn").forEach(
        function(button) {

            button.classList.remove("active");

            if (button.dataset.page === pageName) {
                button.classList.add("active");
            }

        }
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= NAVIGATION BUTTONS ================= */

function connectNavigation() {

    document.querySelectorAll(".nav-btn").forEach(
        function(button) {

            button.addEventListener("click", function() {

                const page =
                    button.dataset.page;

                if (page) {
                    showPage(page);
                }

            });

        }
    );
}


/* ================= OPEN CATEGORY ================= */

function openCategory(category) {

    if (!category) {
        return;
    }


    const categoryName =
        String(category).toLowerCase().trim();


    if (categoryPages[categoryName]) {

        window.location.href =
            categoryPages[categoryName];

        return;
    }


    console.warn(
        "No page found for category:",
        categoryName
    );
}


/* ================= CATEGORY BUTTONS ================= */

function connectCategoryButtons() {

    document.querySelectorAll(
        ".category-card"
    ).forEach(function(button) {

        button.addEventListener("click", function() {

            const category =
                button.dataset.category;

            openCategory(category);

        });

    });
}


/* ================= EXPLORE BUTTON ================= */

function connectExploreButton() {

    const button =
        document.getElementById("exploreBtn");

    if (!button) {
        return;
    }


    button.addEventListener("click", function() {

        showPage("categories");

    });
}


/* ================= VIEW ALL CATEGORIES ================= */

function connectViewAllCategories() {

    const button =
        document.getElementById("viewAllCategories");

    if (!button) {
        return;
    }


    button.addEventListener("click", function() {

        showPage("categories");

    });
}


/* ================= FEATURED BUTTON ================= */

function connectFeaturedButton() {

    const button =
        document.getElementById("viewFeatured");

    if (!button) {
        return;
    }


    button.addEventListener("click", function() {

        showPage("featured");

    });
}


/* ================= ALL CATEGORIES PAGE ================= */

function renderAllCategories() {

    const container =
        document.getElementById("allCategoriesGrid");

    if (!container) {
        return;
    }


    container.innerHTML = "";


    Object.keys(categoryInfo).forEach(
        function(category) {

            const info =
                categoryInfo[category];


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

        }
    );
}


/* ================= SEARCH ================= */

function searchBooks() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");


    if (!input) {
        return;
    }


    const query =
        input.value.trim().toLowerCase();


    if (!results) {
        return;
    }


    if (query === "") {

        results.innerHTML = "";

        return;
    }


    const matchingCategories =
        Object.keys(categoryInfo).filter(
            function(category) {

                const info =
                    categoryInfo[category];

                return (
                    info.name.toLowerCase().includes(query) ||
                    info.description.toLowerCase().includes(query) ||
                    category.includes(query)
                );

            }
        );


    if (matchingCategories.length === 0) {

        results.innerHTML = `
            <div class="search-result-empty">
                No matching categories found.
            </div>
        `;

        return;
    }


    results.innerHTML = "";


    matchingCategories.forEach(
        function(category) {

            const info =
                categoryInfo[category];


            const result =
                document.createElement("button");


            result.className =
                "search-result";


            result.innerHTML = `
                <span>
                    ${info.icon}
                </span>

                <span>
                    ${info.name}
                </span>
            `;


            result.addEventListener(
                "click",
                function() {
                    openCategory(category);
                }
            );


            results.appendChild(result);

        }
    );
}


/* ================= SEARCH CONNECTION ================= */

function connectSearch() {

    const input =
        document.getElementById("searchInput");


    if (!input) {
        return;
    }


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


/* ================= CLEAR SEARCH ================= */

function clearSearch() {

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


function connectClearSearch() {

    const button =
        document.getElementById("clearSearch");


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        clearSearch
    );
}


/* ================= FAVORITES ================= */

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

    if (!bookName) {
        return;
    }


    let favorites =
        getFavorites();


    if (favorites.includes(bookName)) {

        favorites =
            favorites.filter(
                function(book) {
                    return book !== bookName;
                }
            );

    } else {

        favorites.push(bookName);

    }


    saveFavorites(favorites);

    renderFavorites();
}


/* ================= RENDER FAVORITES ================= */

function renderFavorites() {

    const container =
        document.getElementById("favoriteBooks");


    if (!container) {
        return;
    }


    const favorites =
        getFavorites();


    if (favorites.length === 0) {

        container.innerHTML = `
            <div class="empty-library">

                <div class="empty-icon">
                    ♥
                </div>

                <h3>No Favorites Yet</h3>

                <p>
                    Open a book and press the heart button
                    to save it here.
                </p>

            </div>
        `;

        return;
    }


    container.innerHTML = "";


    favorites.forEach(
        function(book) {

            const item =
                document.createElement("div");


            item.className =
                "book-card";


            item.innerHTML = `
                <h3>${escapeHTML(book)}</h3>

                <button
                    class="favorite-button"
                    data-remove-favorite="${escapeHTML(book)}"
                >
                    Remove
                </button>
            `;


            container.appendChild(item);

        }
    );
}


/* ================= FAVORITES PAGE BUTTONS ================= */

function connectFavoriteButtons() {

    document.addEventListener(
        "click",
        function(event) {

            const button =
                event.target.closest(
                    "[data-remove-favorite]"
                );


            if (!button) {
                return;
            }


            const book =
                button.dataset.removeFavorite;


            let favorites =
                getFavorites();


            favorites =
                favorites.filter(
                    function(item) {
                        return item !== book;
                    }
                );


            saveFavorites(favorites);

            renderFavorites();

        }
    );
}


/* ================= FEATURED ================= */

function renderFeaturedBooks() {

    const container =
        document.getElementById("featuredBooks");


    if (!container) {
        return;
    }


    /*
       The featured placeholder already exists
       in your HTML, so we leave it untouched.
    */
}


/* ================= BACK BUTTONS ================= */

function connectBackButtons() {

    const backCategory =
        document.getElementById(
            "backFromCategory"
        );


    if (backCategory) {

        backCategory.addEventListener(
            "click",
            function() {
                showPage("categories");
            }
        );

    }


    const backBook =
        document.getElementById(
            "backFromBook"
        );


    if (backBook) {

        backBook.addEventListener(
            "click",
            function() {
                showPage("categoryBooks");
            }
        );

    }


    const backReader =
        document.getElementById(
            "backFromReader"
        );


    if (backReader) {

        backReader.addEventListener(
            "click",
            function() {
                showPage("book");
            }
        );

    }

}


/* ================= BOOK BUTTONS ================= */

function connectBookButtons() {

    const readButton =
        document.getElementById(
            "readBookBtn"
        );


    if (readButton) {

        readButton.addEventListener(
            "click",
            function() {
                showPage("reader");
            }
        );

    }


    const favoriteButton =
        document.getElementById(
            "favoriteBtn"
        );


    if (favoriteButton) {

        favoriteButton.addEventListener(
            "click",
            function() {

                const titleElement =
                    document.getElementById(
                        "bookDetailTitle"
                    );


                if (!titleElement) {
                    return;
                }


                const title =
                    titleElement.textContent.trim();


                toggleFavorite(title);

            }
        );

    }

}


/* ================= HTML ESCAPE ================= */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ================= GLOBAL FUNCTIONS ================= */

window.showPage = showPage;
window.openCategory = openCategory;
window.searchBooks = searchBooks;
window.clearSearch = clearSearch;
window.toggleFavorite = toggleFavorite;
window.renderFavorites = renderFavorites;
window.renderAllCategories = renderAllCategories;


/* ================= INITIALIZE ================= */

function initializeLibrary() {

    connectNavigation();

    connectCategoryButtons();

    connectExploreButton();

    connectViewAllCategories();

    connectFeaturedButton();

    connectSearch();

    connectClearSearch();

    connectBackButtons();

    connectBookButtons();

    connectFavoriteButtons();

    renderAllCategories();

    renderFeaturedBooks();

    renderFavorites();

    showPage("home");

    console.log(
        "Go Deep Library loaded successfully."
    );
}


/* ================= START ================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeLibrary
    );

} else {

    initializeLibrary();

}
