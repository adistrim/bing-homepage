const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('.search-bar');
    const searchTerm = searchInput.value.trim();
    const searchUrl = `https://www.bing.com/search?q=${searchTerm}`;
    window.location.href = searchUrl;
});



<form method="get" action="https://www.bing.com/search">
            <input class="search-bar" type="text" name="q" size="25" maxlength="255" value=""
                placeholder="Search or enter web address" />
            <input class="search-btn" type="submit" value="Search" />
        </form>