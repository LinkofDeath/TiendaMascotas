var xhrHeader = new XMLHttpRequest();
xhrHeader.open('GET', 'menu.html');
xhrHeader.onload = function() {
    if (xhrHeader.status === 200) {
        var header = xhrHeader.responseText;
        var headerContainer = document.getElementsByTagName('header')[0];
        headerContainer.innerHTML = header;
    }
};
xhrHeader.send();

var xhrFooter = new XMLHttpRequest();
xhrFooter.open('GET', 'footer.html');
xhrFooter.onload = function() {
    if (xhrFooter.status === 200) {
        var footer = xhrFooter.responseText;
        var footerContainer = document.getElementsByTagName('footer')[0];
        footerContainer.innerHTML = footer;
    }
};
xhrFooter.send();