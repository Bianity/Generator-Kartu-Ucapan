(function () {
    "use strict";

    function systemDetails(){
        return {
            'name': 'stop-scrolling',
            'version': '2.0.0'
        }
    }

    function showWarning(message) {
        return message;
    }

    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        showWarning("Right-click is disabled.");
    });

    // Disable text selection
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    // Disable copy shortcut
    document.addEventListener('copy', function (e) {
        e.preventDefault();
        showWarning("Penyalinan konten dinonaktifkan.");
    });

    // Disable cut shortcut
    document.addEventListener('cut', function (e) {
        e.preventDefault();
        showWarning("Pemotongan konten dinonaktifkan.");
    });

    // Disable paste shortcut
    document.addEventListener('paste', function (e) {
        e.preventDefault();
        showWarning("Menempelkan konten dinonaktifkan.");
    });

    // Disable save shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
            e.preventDefault();
            showWarning("Menyimpan dinonaktifkan.");
        }
    });

    // Disable view source shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) {
            e.preventDefault();
            showWarning("Melihat sumber halaman dinonaktifkan.");
        }
    });

    // Disable print shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) {
            e.preventDefault();
            showWarning("Pencetakan dinonaktifkan.");
        }
    });

    // Disable developer tools shortcut (Ctrl+Shift+I)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            showWarning("Alat pengembang dinonaktifkan.");
        }
    });

    // Disable Safari reader mode shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.metaKey && e.shiftKey && e.keyCode === 82) || (e.ctrlKey && e.shiftKey && e.keyCode === 82)) {
            e.preventDefault();
            showWarning("Mode pembaca Safari dinonaktifkan.");
        }
    });

    // Disable Ctrl+A/⌘+A (Select All)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 65) {
            e.preventDefault();
            showWarning("Pilih Semua dinonaktifkan.");
        }
    });

    // Disable Ctrl+C/⌘+C (Copy)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
            e.preventDefault();
            showWarning("Salinan dinonaktifkan.");
        }
    });

    // Disable Ctrl+X/⌘+X (Cut)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 88) {
            e.preventDefault();
            showWarning("Pemotongan dinonaktifkan.");
        }
    });

    // Disable Ctrl+V/⌘+V (Paste)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 86) {
            e.preventDefault();
            showWarning("Tempel dinonaktifkan.");
        }
    });

    // Disable image dragging
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });

    // Disable image dragging by mouse
    document.addEventListener('mousedown', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // Disable opening Developer Tools with Ctrl + Shift + J
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            e.stopPropagation();
        }
    });

    // Disable F12 key (Developer Tools)
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 123) { // F12 key
            e.preventDefault();
            showWarning("F12 dinonaktifkan.");
        }
    });

})();
