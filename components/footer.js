export class Footer extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
 
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.template()}`
            ;
    }

    template() {
        return fetch('footer.html')
            .then(response => response.text())
            .then(html => {
                this.shadowRoot.innerHTML = html;
            });
    }

    disconnectedCallback() {
        this.remove();
    }
}