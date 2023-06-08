function goBack() {
    if (document.referrer === '') {
        // If there's no previous page, redirect to your default page
        window.location.href = 'index.html';
    } else {
        window.history.back();
    }
}
