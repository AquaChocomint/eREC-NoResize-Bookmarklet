javascript:(function () {

    $(window).off('resize');

    const title = Array.from(document.getElementsByTagName('span')).find(e => /^薬剤師国家試験/.test(e.innerText));
    if(title){
        const span = document.createElement('span');
        span.style.marginLeft = '10px';
        span.innerText = '(固定済み)';
        title.appendChild(span);
    }

})();