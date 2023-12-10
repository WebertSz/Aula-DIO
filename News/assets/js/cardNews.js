class CardNews extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build () {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");        

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");
        
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");        

        const newsImage = document.createElement("img");
        newsImage.src = "./assets/img/bitcoin.jpeg";
        newsImage.alt = "imagem da criptomoeda bitcoin";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);        

        return componentRoot;
    }

    style () {
        
        const style = document.createElement("style");
        style.textContent=`
        .card {
            width: 720px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            box-shadow: 10px 10px 10px 3px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 10px 3px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 10px 3px rgba(0,0,0,0.75);
        }
        
        .card-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card-left > span {
            font-weight: 400;
        }
        
        .card-left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            cursor: pointer;
            font-weight: bold;
        }
        
        .card-left > p {
            color: gray;
        }
        
        .card-right > img {
            width: 99%;
        }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);