class MyPost extends HTMLElement {
    static get observedAttributes(){
        return ['user', 'comment', 'likesnumber', 'userposter', 'descriptionpost', 'photolocation'];
    }
    //'imagePost' //, 'profilePic', 'descriptionPost'

    constructor(){
        super();
        this.attachShadow({mode: 'open' });
    }

    connectedCallBack(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue,newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/post/style.css"
        <section>
        <div  class="container">

            <div class="header">
            <img src="images/profilepicture.png" class="fotodeperfil">
            
                <div class="infousuario">
                <p class="usuarioinfo"> <b> ${this.userposter} </b> ${this.photolocation} </p>
                </div>
                
                <div class="masinformacion">
                <img src="images/moreinfoicon.png" class="iconoinformacion">
                </div>
                
            </div>

           

            <img src="images/postpicture.png" class="fotopost">

            <img src="images/scrollicon.png" class="iconoscroll">

            <div class="fab-icons">
            <img src="images/hearticon.png" class="iconocorazon">
            <img src="images/commenticon.png" class="iconocomentario">
            <img src="images/sendicon.png" class="iconoenviar">
            <img src="images/saveicon.png" class="iconoguardar">
            </div>
            

            <p class="megustas"> ${this.likesnumber} </p>
            <p class="description"> <b> ${this.userposter} </b> ${this.descriptionpost} </p>
            <p class="comentarios"> <b> ${this.user} </b> ${this.comment} </p>

        </div> 
        </section>
        `;
  
       
    }
}

customElements.define('my-post', MyPost);
export default MyPost;
