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

const games = [

    new GameS("God of war","https://upload.wikimedia.org/wikipedia/en/0/0a/GodofWar_PS4_cover.jpg","God of War is a mythology-based action-adventure video game franchise. Created by David Jaffe at Sony's Santa Monica Studio, the series debuted in 2005 on the PlayStation 2 (PS2) video game console, and has become a flagship title for the PlayStation brand, consisting of eight games across multiple platforms. The story is about Kratos, a Spartan warrior tricked into killing his wife and daughter by his former master, the Greek God of War Ares. Kratos kills Ares at the behest of the goddess Athena and takes his place as the new God of War, but is still haunted by the nightmares of his past. Revealed to be a demigod and the son of Zeus, the King of the Olympian Gods who betrays Kratos, the Spartan then seeks revenge against the gods for their machinations. What follows is a series of attempts to free himself from the influence of the gods and the Titans and exact revenge. ","PS4","Action","2018"),
    new GameS("Star Wars Jedi: Fallen Order","https://upload.wikimedia.org/wikipedia/en/9/9f/Star_Wars_Jedi_Fallen_Order_cover_art.jpg", " Star Wars Jedi: Fallen Order is a single-player action-adventure video game developed by Respawn Entertainment and published by Electronic Arts, set in the Star Wars universe shortly after Episode III – Revenge of the Sith. It was announced during E3 2018 and a more detailed reveal took place at the Star Wars Celebration in April 2019. The game was released for Windows, PlayStation 4, and Xbox One on November 15, 2019. A Stadia version is due in 2020. The game received generally favorable reviews from critics, with many comparing it to the Star Wars: The Force Unleashed games. ","PS4","Action","2019"),
    new GameS("The Last of Us Part II","https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU2_box_art.jpg", "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. Set five years after The Last of Us (2013), the game focuses on two playable characters in a post-apocalyptic United States whose lives intertwine: Ellie, who sets out for revenge after suffering a tragedy, and Abby, a soldier who becomes involved in a conflict with a cult. The game is played from the third-person perspective. Players can use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. ","PS4","Action","2020")

];

const gameContainer = document.getElementById('game-container');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');


