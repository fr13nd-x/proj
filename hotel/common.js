// common.js - this function loads the sidebar.html contents


// common.js
window.onload = function() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(template => {
            // Insert the template HTML into the templateContainer
            document.getElementById('sidebarContainer').innerHTML = template;

            // Call a function to initialize your script after template is loaded
            initializeSidebar();
        })
        .catch(error => {
            console.error('Error loading template:', error);
        });
}

function initializeSidebar() {
    // Your script code for the sidebar collapse and expand effect
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('#btn-sidenav');
    const searchBtn = document.querySelector('.bx-search');

    closeBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        menuBtnChange();
    });

    searchBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        menuBtnChange();
    });

    function menuBtnChange() {
        if (sidebar.classList.contains('open')) {
            closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
        } else {
            closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
        }
    }
}

