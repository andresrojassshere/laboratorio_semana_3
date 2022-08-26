import * as components from "./components/index.js"
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-post user="isabellasilva01" comment="thanks for the pic :)!!" likesnumber="159 likes" userposter="andresrojassshere" descriptionpost="memories of a cute moment" photolocation="Rivera-Huila"></my-post>
        `
    }
}

customElements.define("app-container",AppContainer);