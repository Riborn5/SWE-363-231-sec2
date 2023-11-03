class GameS{
    constructor(name,img,breif,platform,genre,releaseDate){
        this.name=name;
        this.img=img;
        this.breif=breif;
        this.platform=platform;
        this.genre=genre;
        this.releaseDate=releaseDate;
    }
    createGameCard(){
        const card = createElement('div', 'card');
        card.innerHTML = `
          <img src="${this.img}" alt="Profile Picture">
          <h2 class="title-text">${this.name}</h2> <!-- Added class here -->
          <div class="dates-brief">
            <span>Starting Year: ${this.releaseDate}</span>
          </div>
          <div class="brief-box brief-text" data-brief="${this.breif}">${this.breif}</div> <!-- And here -->
          <div class="tags-box ${this.genre.toLowerCase()}">${this.genre}</div>
        `;
        card.addEventListener('click', () => showModal(this));
        return card;
      }

      

}