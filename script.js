/* =========================================================
   GO DEEP LIBRARY
   script.js
   ========================================================= */


/* ================= BOOK DATA ================= */

const books = [

    {
        id: "treasure-island",
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        category: "classics",
        categoryName: "Classics",
        icon: "🏴‍☠️",
        description:
            "A famous adventure about young Jim Hawkins, a mysterious map, and a dangerous journey in search of buried treasure.",
        summary: `
            <h2>About the Book</h2>

            <p>
                <strong>Treasure Island</strong> is a classic adventure
                novel by Robert Louis Stevenson. The story follows
                Jim Hawkins, a young boy who discovers a treasure map.
            </p>

            <h2>The Journey</h2>

            <p>
                Jim joins a voyage aboard a ship called the
                Hispaniola. The journey begins as an exciting
                search for treasure, but Jim soon discovers that
                some members of the crew have secret plans.
            </p>

            <h2>Main Ideas</h2>

            <ul>
                <li>Courage</li>
                <li>Friendship</li>
                <li>Trust</li>
                <li>Adventure</li>
                <li>Making wise decisions</li>
            </ul>

            <h2>Why It Is Famous</h2>

            <p>
                Treasure Island helped make the modern
                pirate-adventure story especially popular.
                It remains one of the best-known adventure
                classics.
            </p>
        `
    },

    {
        id: "around-the-world",
        title: "Around the World in 80 Days",
        author: "Jules Verne",
        category: "adventure",
        categoryName: "Adventure",
        icon: "🌍",
        description:
            "Phileas Fogg makes an extraordinary journey around the world after accepting a remarkable challenge.",
        summary: `
            <h2>About the Book</h2>

            <p>
                Jules Verne's famous adventure follows
                Phileas Fogg, a calm and determined Englishman,
                and his servant Passepartout.
            </p>

            <h2>The Challenge</h2>

            <p>
                Fogg makes a bet that he can travel around the
                world in eighty days. The pair travel by trains,
                ships and other forms of transportation.
            </p>

            <h2>The Adventure</h2>

            <p>
                Their journey is filled with delays, unexpected
                events and difficult decisions. Fogg must remain
                calm while trying to complete the challenge.
            </p>

            <h2>Important Ideas</h2>

            <ul>
                <li>Determination</li>
                <li>Time management</li>
                <li>Travel and exploration</li>
                <li>Courage</li>
            </ul>
        `
    },

    {
        id: "robinson-crusoe",
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        category: "adventure",
        categoryName: "Adventure",
        icon: "🏝️",
        description:
            "A classic survival story about a man who must learn to live on a remote island.",
        summary: `
            <h2>About the Book</h2>

            <p>
                Robinson Crusoe is a classic novel by Daniel Defoe.
                Robinson becomes stranded on a remote island after
                a shipwreck.
            </p>

            <h2>Life on the Island</h2>

            <p>
                Instead of giving up, Robinson studies his
                surroundings and creates tools, shelter and ways
                to obtain food.
            </p>

            <h2>Lessons</h2>

            <ul>
                <li>Resourcefulness</li>
                <li>Patience</li>
                <li>Problem solving</li>
                <li>Perseverance</li>
            </ul>
        `
    },

    {
        id: "journey-centre-earth",
        title: "Journey to the Centre of the Earth",
        author: "Jules Verne",
        category: "science-fiction",
        categoryName: "Science Fiction",
        icon: "🌋",
        description:
            "A scientist and his companions begin an extraordinary expedition deep beneath the Earth's surface.",
        summary: `
            <h2>About the Book</h2>

            <p>
                Professor Otto Lidenbrock discovers an old message
                describing a possible route toward the centre of
                the Earth.
            </p>

            <h2>The Expedition</h2>

            <p>
                Professor Lidenbrock, his nephew Axel and their
                guide Hans travel underground through caves and
                volcanic landscapes.
            </p>

            <h2>Science and Imagination</h2>

            <p>
                Jules Verne combines scientific ideas with
                imagination to create an exciting underground
                adventure.
            </p>
        `
    },

    {
        id: "time-machine",
        title: "The Time Machine",
        author: "H. G. Wells",
        category: "science-fiction",
        categoryName: "Science Fiction",
        icon: "⏰",
        description:
            "A scientist creates a machine that allows him to travel through time and see a distant future.",
        summary: `
            <h2>About the Book</h2>

            <p>
                H. G. Wells's famous science-fiction novel tells
                the story of an inventor known as the Time Traveller.
            </p>

            <h2>Time Travel</h2>

            <p>
                The inventor creates a machine capable of moving
                through time. He travels far into Earth's future
                and discovers a very different world.
            </p>

            <h2>Big Questions</h2>

            <ul>
                <li>How might humanity change?</li>
                <li>What could the distant future look like?</li>
                <li>How can technology change society?</li>
            </ul>
        `
    },

    {
        id: "space-science",
        title: "A Journey Through Space",
        author: "Library Science Collection",
        category: "science",
        categoryName: "Science",
        icon: "🔬",
        description:
            "An introductory exploration of planets, stars, galaxies and the amazing universe.",
        summary: `
            <h2>Exploring Space</h2>

            <p>
                Space is enormous and contains billions of stars,
                planets, galaxies and other objects.
            </p>

            <h2>The Solar System</h2>

            <p>
                Our Solar System contains the Sun and the planets
                that orbit it, along with moons, asteroids and
                comets.
            </p>

            <h2>Stars</h2>

            <p>
                Stars are huge objects made mostly of extremely hot
                gas. Our Sun is the star closest to Earth.
            </p>

            <h2>Learning Science</h2>

            <p>
                Scientists use telescopes, spacecraft and
                mathematical models to learn more about the universe.
            </p>
        `
    },

    {
        id: "sherlock-holmes",
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        category: "mystery",
        categoryName: "Mystery & Detective",
        icon: "🔎",
        description:
            "A collection of famous detective adventures featuring Sherlock Holmes and Dr. Watson.",
        summary: `
            <h2>About the Book</h2>

            <p>
                Sherlock Holmes is one of literature's most famous
                fictional detectives. He is known for careful
                observation and logical reasoning.
            </p>

            <h2>Dr. Watson</h2>

            <p>
                Dr. John Watson accompanies Holmes and records
                many of their investigations.
            </p>

            <h2>The Detective Method</h2>

            <ul>
                <li>Observe carefully</li>
                <li>Collect clues</li>
                <li>Compare evidence</li>
                <li>Think logically</li>
            </ul>
        `
    },

    {
        id: "alice-wonderland",
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        category: "fantasy",
        categoryName: "Fantasy",
        icon: "🐇",
        description:
            "Alice enters a strange and imaginative world filled with unusual characters and surprising events.",
        summary: `
            <h2>About the Book</h2>

            <p>
                Alice's Adventures in Wonderland is a famous
                imaginative story by Lewis Carroll.
            </p>

            <h2>Wonderland</h2>

            <p>
                Alice follows a White Rabbit and enters a strange
                world where ordinary rules do not always work.
            </p>

            <p>
                She meets many unusual characters and experiences
                a series of surprising adventures.
            </p>

            <h2>Main Ideas</h2>

            <ul>
                <li>Curiosity</li>
                <li>Imagination</li>
                <li>Wonder</li>
                <li>Adventure</li>
            </ul>
        `
    },

    {
        id: "little-women",
        title: "Little Women",
        author: "Louisa May Alcott",
        category: "classics",
        categoryName: "Classics",
        icon: "📕",
        description:
            "The story of the four March sisters and their family life, dreams and challenges.",
        summary: `
            <h2>About the Book</h2>

            <p>
                Little Women follows four sisters:
                Meg, Jo, Beth and Amy March.
            </p>

            <h2>The Sisters</h2>

            <p>
                Each sister has a different personality and
                different hopes for the future. They support
                one another while growing up.
            </p>

            <h2>Important Themes</h2>

            <ul>
                <li>Family</li>
                <li>Kindness</li>
                <li>Responsibility</li>
                <li>Growing up</li>
                <li>Following one's goals</li>
            </ul>
        `
    },

    {
        id: "history-civilizations",
        title: "Great Civilizations",
        author: "Library History Collection",
        category: "history",
        categoryName: "History",
        icon: "🏛️",
        description:
            "An introduction to several important civilizations and the ways they shaped human history.",
        summary: `
            <h2>Understanding History</h2>

            <p>
                Human civilizations have developed in many parts
                of the world over thousands of years.
            </p>

            <h2>Ancient Civilizations</h2>

            <p>
                Ancient Egypt, Mesopotamia, the Indus Valley
                Civilization, ancient China and other societies
                developed cities, writing, trade and systems of
                government.
            </p>

            <h2>Why History Matters</h2>

            <p>
                Studying history helps us understand how people
                lived, what they achieved and how societies changed.
            </p>
        `
    },

    {
        id: "great-explorers",
        title: "Great Explorers",
        author: "Library Geography Collection",
        category: "geography",
        categoryName: "Geography & Travel",
        icon: "🧭",
        description:
            "Learn about exploration, maps, oceans and the changing understanding of our world.",
        summary: `
            <h2>Exploring the World</h2>

            <p>
                People have travelled across mountains, deserts,
                oceans and continents for thousands of years.
            </p>

            <h2>Maps</h2>

            <p>
                Maps help people understand locations, distances,
                landscapes and routes.
            </p>

            <h2>Modern Exploration</h2>

            <p>
                Today exploration includes studying oceans,
                polar regions, mountains and even outer space.
            </p>
        `
    },

    {
        id: "famous-scientists",
        title: "Famous Scientists",
        author: "Library Biography Collection",
        category: "biographies",
        categoryName: "Biography & Famous People",
        icon: "🧠",
        description:
            "Discover the lives and discoveries of scientists who made important contributions to human knowledge.",
        summary: `
            <h2>Scientists and Discovery</h2>

            <p>
                Scientists study the natural world and develop
                ideas that help us understand how it works.
            </p>

            <h2>Examples</h2>

            <ul>
                <li>Isaac Newton — laws of motion and gravity</li>
                <li>Albert Einstein — theories of relativity</li>
                <li>Marie Curie — important research on radioactivity</li>
                <li>Charles Darwin — theory of evolution</li>
            </ul>

            <h2>Learning from Scientists</h2>

            <p>
                Scientific progress often begins with asking
                questions, observing carefully and testing ideas.
            </p>
        `
    },

    {
        id: "childrens-stories",
        title: "Classic Children's Stories",
        author: "Library Children's Collection",
        category: "children",
        categoryName: "Children's Books",
        icon: "🧒",
        description:
            "A collection of simple, imaginative stories created for young readers.",
        summary: `
            <h2>About Children's Stories</h2>

            <p>
                Children's literature can introduce young readers
                to imagination, friendship, courage and curiosity.
            </p>

            <h2>Reading</h2>

            <p>
                Reading stories can help develop vocabulary,
                imagination and the ability to understand different
                characters and situations.
            </p>

            <h2>A Good Reading Habit</h2>

            <p>
                Reading a little every day can gradually build
                knowledge and confidence.
            </p>
        `
    }

];


/* ================= CATEGORY DATA ================= */

const categories = [

    {
        id: "classics",
        name: "Classics",
        icon: "🏛️",
        description: "Timeless stories"
    },

    {
        id: "adventure",
        name: "Adventure",
        icon: "🗺️",
        description: "Journeys & exploration"
    },

    {
        id: "science",
        name: "Science",
        icon: "🔬",
        description: "Discover how things work"
    },

    {
        id: "science-fiction",
        name: "Science Fiction",
        icon: "🚀",
        description: "Future worlds"
    },

    {
        id: "mystery",
        name: "Mystery & Detective",
        icon: "🔎",
        description: "Solve the mystery"
    },

    {
        id: "fantasy",
        name: "Fantasy",
        icon: "🏰",
        description: "Magical worlds"
    },

    {
        id: "history",
        name: "History",
        icon: "📜",
        description: "Learn from the past"
    },

    {
        id: "geography",
        name: "Geography & Travel",
        icon: "🌍",
        description: "Explore our world"
    },

    {
        id: "children",
        name: "Children's Books",
        icon: "👦",
        description: "Stories for young readers"
    },

    {
        id: "biographies",
        name: "Biography & Famous People",
        icon: "🧠",
        description: "Lives that shaped history"
    }

];


/* ================= STATE ================= */

let currentBook = null;

let favorites = JSON.parse(
    localStorage.getItem("goDeepLibraryFavorites") || "[]"
);


/* ================= ELEMENTS ================= */

const pages = {
    home: document.getElementById("homePage"),
    categories: document.getElementById("categoriesPage"),
    featured: document.getElementById("featuredPage"),
    favorites: document.getElementById("favoritesPage"),
    categoryBooks: document.getElementById("categoryBooksPage"),
    book: document.getElementById("bookPage"),
    reader: document.getElementById("readerPage")
};

const navButtons =
    document.querySelectorAll(".nav-btn");

const categoryCards =
    document.querySelectorAll(".category-card");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const searchResults =
    document.getElementById("searchResults");


/* ================= PAGE NAVIGATION ================= */

function showPage(pageName) {

    Object.values(pages).forEach(page => {
        if (page) {
            page.classList.remove("active");
        }
    });

    if (pages[pageName]) {
        pages[pageName].classList.add("active");
    }

    navButtons.forEach(button => {

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


/* ================= NAVIGATION EVENTS ================= */

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page =
            button.dataset.page;

        showPage(page);

        if (page === "categories") {
            renderAllCategories();
        }

        if (page === "featured") {
            renderFeaturedPage();
        }

        if (page === "favorites") {
            renderFavorites();
        }

    });

});


/* ================= CATEGORY CARDS ================= */

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category =
            card.dataset.category;

        openCategory(category);

    });

});


/* ================= RENDER CATEGORIES ================= */

function renderAllCategories() {

    const container =
        document.getElementById("allCategoriesGrid");

    if (!container) return;

    container.innerHTML = "";

    categories.forEach(category => {

        const card =
            document.createElement("button");

        card.className =
            "category-card " + category.id;

        card.innerHTML = `

            <span class="category-icon">
                ${category.icon}
            </span>

            <span class="category-name">
                ${category.name}
            </span>

            <span class="category-description">
                ${category.description}
            </span>

        `;

        card.addEventListener("click", () => {
            openCategory(category.id);
        });

        container.appendChild(card);

    });

}


/* ================= OPEN CATEGORY ================= */

function openCategory(categoryId) {

    const category =
        categories.find(
            item => item.id === categoryId
        );

    if (!category) return;

    const categoryBooks =
        books.filter(
            book => book.category === categoryId
        );

    document.getElementById(
        "categoryPageIcon"
    ).textContent = category.icon;

    document.getElementById(
        "categoryPageLabel"
    ).textContent = "CATEGORY";

    document.getElementById(
        "categoryPageTitle"
    ).textContent = category.name;

    document.getElementById(
        "categoryPageDescription"
    ).textContent =
        `${categoryBooks.length} book${categoryBooks.length === 1 ? "" : "s"} in this collection.`;

    const container =
        document.getElementById(
            "categoryPageBooks"
        );

    container.innerHTML = "";

    if (categoryBooks.length === 0) {

        container.innerHTML = `

            <div class="empty-library">

                <div class="empty-icon">
                    📚
                </div>

                <h3>
                    Collection Coming Soon
                </h3>

                <p>
                    More books will be added to this category.
                </p>

            </div>

        `;

    } else {

        categoryBooks.forEach(book => {
            container.appendChild(
                createBookCard(book)
            );
        });

    }

    showPage("categoryBooks");

}


/* ================= BOOK CARD ================= */

function createBookCard(book) {

    const card =
        document.createElement("article");

    card.className = "book-card";

    const isFavorite =
        favorites.includes(book.id);

    card.innerHTML = `

        <div class="book-cover">
            ${book.icon}
        </div>

        <div class="book-card-body">

            <span class="book-card-category">
                ${book.categoryName}
            </span>

            <h3>
                ${book.title}
            </h3>

            <p class="book-card-author">
                ${book.author}
            </p>

            <p class="book-card-description">
                ${book.description}
            </p>

            <div class="book-card-actions">

                <button
                    class="book-open-btn"
                    data-open-book="${book.id}"
                >
                    View Book
                </button>

                <button
                    class="book-favorite-btn ${isFavorite ? "saved" : ""}"
                    data-favorite-book="${book.id}"
                    title="Favorite"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>

        </div>
    `;


    const openButton =
        card.querySelector(
            `[data-open-book="${book.id}"]`
        );

    openButton.addEventListener(
        "click",
        () => openBook(book.id)
    );


    const favoriteButton =
        card.querySelector(
            `[data-favorite-book="${book.id}"]`
        );

    favoriteButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleFavorite(book.id);

        }
    );


    return card;
}


/* ================= FEATURED BOOKS ================= */

function renderFeaturedBooks() {

    const container =
        document.getElementById(
            "featuredBooks"
        );

    if (!container) return;

    container.innerHTML = "";

    books.slice(0, 5).forEach(book => {

        container.appendChild(
            createBookCard(book)
        );

    });

}


function renderFeaturedPage() {

    const container =
        document.getElementById(
            "featuredPageBooks"
        );

    if (!container) return;

    container.innerHTML = "";

    books.forEach(book => {

        container.appendChild(
            createBookCard(book)
        );

    });

}


/* ================= OPEN BOOK ================= */

function openBook(bookId) {

    const book =
        books.find(
            item => item.id === bookId
        );

    if (!book) return;

    currentBook = book;

    document.getElementById(
        "bookDetailCover"
    ).textContent = book.icon;

    document.getElementById(
        "bookDetailCategory"
    ).textContent =
        book.categoryName;

    document.getElementById(
        "bookDetailTitle"
    ).textContent =
        book.title;

    document.getElementById(
        "bookDetailAuthor"
    ).textContent =
        "by " + book.author;

    document.getElementById(
        "bookDetailDescription"
    ).textContent =
        book.description;

    updateFavoriteButton();

    showPage("book");

}


/* ================= READER ================= */

document.getElementById(
    "readBookBtn"
).addEventListener(
    "click",
    openReader
);


function openReader() {

    if (!currentBook) return;

    document.getElementById(
        "readerCategory"
    ).textContent =
        currentBook.categoryName;

    document.getElementById(
        "readerTitle"
    ).textContent =
        currentBook.title;

    document.getElementById(
        "readerAuthor"
    ).textContent =
        "by " + currentBook.author;

    document.getElementById(
        "readerContent"
    ).innerHTML =
        currentBook.summary;

    showPage("reader");

}


/* ================= FAVORITES ================= */

function toggleFavorite(bookId) {

    if (favorites.includes(bookId)) {

        favorites =
            favorites.filter(
                id => id !== bookId
            );

    } else {

        favorites.push(bookId);

    }

    localStorage.setItem(
        "goDeepLibraryFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteButton();

    renderFeaturedBooks();

    renderFeaturedPage();

    renderFavorites();

}


function updateFavoriteButton() {

    if (!currentBook) return;

    const button =
        document.getElementById(
            "favoriteBtn"
        );

    if (!button) return;

    const saved =
        favorites.includes(
            currentBook.id
        );

    button.textContent =
        saved
            ? "♥ Remove from Favorites"
            : "♡ Add to Favorites";

    button.classList.toggle(
        "saved",
        saved
    );

}


document.getElementById(
    "favoriteBtn"
).addEventListener(
    "click",
    () => {

        if (currentBook) {
            toggleFavorite(currentBook.id);
        }

    }
);


/* ================= FAVORITES PAGE ================= */

function renderFavorites() {

    const container =
        document.getElementById(
            "favoriteBooks"
        );

    if (!container) return;

    container.innerHTML = "";

    const favoriteBooks =
        books.filter(
            book => favorites.includes(book.id)
        );


    if (favoriteBooks.length === 0) {

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


    favoriteBooks.forEach(book => {

        container.appendChild(
            createBookCard(book)
        );

    });

}


/* ================= SEARCH ================= */

searchInput.addEventListener(
    "input",
    handleSearch
);


function handleSearch() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();

    clearSearch.classList.toggle(
        "show",
        query.length > 0
    );


    if (!query) {

        searchResults.classList.remove(
            "show"
        );

        searchResults.innerHTML = "";

        return;
    }


    const results =
        books.filter(book => {

            return (

                book.title
                    .toLowerCase()
                    .includes(query)

                ||

                book.author
                    .toLowerCase()
                    .includes(query)

                ||

                book.categoryName
                    .toLowerCase()
                    .includes(query)

                ||

                book.description
                    .toLowerCase()
                    .includes(query)

            );

        });


    searchResults.innerHTML = "";


    if (results.length === 0) {

        searchResults.innerHTML = `

            <div class="no-results">
                No books found for
                "<strong>${escapeHTML(query)}</strong>"
            </div>

        `;

    } else {

        results.slice(0, 8).forEach(book => {

            const result =
                document.createElement("button");

            result.className =
                "search-result-item";

            result.innerHTML = `

                <div class="result-cover">
                    ${book.icon}
                </div>

                <div class="result-info">

                    <h4>
                        ${book.title}
                    </h4>

                    <p>
                        ${book.author}
                        ·
                        ${book.categoryName}
                    </p>

                </div>

            `;

            result.addEventListener(
                "click",
                () => {

                    searchResults.classList.remove(
                        "show"
                    );

                    searchInput.value = "";

                    clearSearch.classList.remove(
                        "show"
                    );

                    openBook(book.id);

                }
            );

            searchResults.appendChild(result);

        });

    }

    searchResults.classList.add(
        "show"
    );

}


/* ================= CLEAR SEARCH ================= */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchResults.innerHTML = "";

        searchResults.classList.remove(
            "show"
        );

        clearSearch.classList.remove(
            "show"
        );

        searchInput.focus();

    }
);


/* ================= CLOSE SEARCH ================= */

document.addEventListener(
    "click",
    event => {

        const searchSection =
            document.querySelector(
                ".search-section"
            );

        if (
            searchSection &&
            !searchSection.contains(event.target)
        ) {

            searchResults.classList.remove(
                "show"
            );

        }

    }
);


/* ================= HERO BUTTON ================= */

document.getElementById(
    "exploreBtn"
).addEventListener(
    "click",
    () => {

        showPage("categories");

        renderAllCategories();

    }
);


/* ================= VIEW ALL CATEGORIES ================= */

document.getElementById(
    "viewAllCategories"
).addEventListener(
    "click",
    () => {

        showPage("categories");

        renderAllCategories();

    }
);


/* ================= VIEW FEATURED ================= */

document.getElementById(
    "viewFeatured"
).addEventListener(
    "click",
    () => {

        showPage("featured");

        renderFeaturedPage();

    }
);


/* ================= BACK BUTTONS ================= */

document.getElementById(
    "backFromCategory"
).addEventListener(
    "click",
    () => {

        showPage("categories");

        renderAllCategories();

    }
);


document.getElementById(
    "backFromBook"
).addEventListener(
    "click",
    () => {

        showPage("home");

    }
);


document.getElementById(
    "backFromReader"
).addEventListener(
    "click",
    () => {

        showPage("book");

    }
);


/* ================= HTML SAFETY ================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ================= INITIALIZE ================= */

renderFeaturedBooks();

renderAllCategories();

renderFavorites();

showPage("home");
```
