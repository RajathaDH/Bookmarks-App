const bookmarks = document.querySelector('.bookmarks');

async function readBookmarks() {
    const result = await fetch('../bookmarks.json');

    const data = await result.json();

    console.log(data);
}

readBookmarks();