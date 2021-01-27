const bookmarks = document.querySelector('.bookmarks');
const bookmarkForm = document.getElementById('bookmarkForm');
const bookmarkModal = document.getElementById('addBookmark');

bookmarkForm.addEventListener('submit', e => {
    e.preventDefault();
});

async function readBookmarks() {
    const result = await fetch('../bookmarks.json');

    const data = await result.json();

    console.log(data);
}

readBookmarks();