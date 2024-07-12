customElements.define('text-animation', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const link = document.createElement('link')
        const div1 = document.createElement('div')
        const h1 = document.createElement('h1');
        const div2 = document.createElement('div')
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', './webComponent.css');
        div1.setAttribute('class', 'container')
        h1.setAttribute('class', 'text');
        h1.setAttribute('data-text', this.getAttribute('text'));
        h1.textContent = h1.getAttribute('data-text');
        div2.setAttribute('class', 'wbk');
        div1.appendChild(h1);
        div1.appendChild(div2);
        shadow.appendChild(link);
        shadow.firstChild.addEventListener('load', () => {
            shadow.appendChild(div1);
        })
    }
})