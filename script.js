games_list = 
[
    {
        src:"/assets/images/download.jpeg",
        date:new Date("2018-10-02:00:00.000Z"), // YYYY-MM-DDTHH:mm:ss.sssZ is the ISO 8601 format
        title:"God of War",
        brief:"Game of the year 2018",
        tag:"PS4"
    },
    {
        src:"assets/images/download (1).jpeg",
        date:new Date("2023-10-05:00:00.000Z"),
        title:"The Art of Color Theory in Web Design",
        brief:"Learn how understanding color theory can significantly impact the visual appeal and user experience of your web designs. Discover tips for selecting and combining colors effectively.",

        tag:"Web Development"
    },
    {
        src:"assets/images/Super_Mario_Odyssey.jpg",
        date:new Date("2023-10-10:00:00.000Z"),
        title:"Optimizing Website Performance for Speed",
        brief:"Explore techniques and strategies to enhance your website's performance, ensuring faster loading times and a smoother user experience. Speed matters in today's digital landscape.",
     
        tag:"Web Development"
    },
 
]

class Games {
    constructor({ title, src, brief, tags, date }) {
      this.title = title;
      this.src = src;
      this.brief = brief !== '.' ? brief : 'N/A';
      this.tags = tags !== '.' ? tags : 'N/A';
      this.date = date;
    }
  
    createGameCard() {
      const card = createElement('div', 'card');
      card.innerHTML = `
        <img src="${this.src}" alt="Profile Picture">
        <h2 class="title-text">${this.title}</h2> <!-- Added class here -->
        <div class="dates-brief">
          <span>Starting Year: ${this.date}</span>
        </div>
        <div class="brief-box brief-text" data-brief="${this.brief}">${this.brief}</div> <!-- And here -->
        <div class="tags-box ${this.tags.toLowerCase()}">${this.tags}</div>
      `;
      card.addEventListener('click', () => showModal(this));
      return card;
    }
  }
  
  const membersList = document.getElementById('members-list');
  const searchTitleInput = document.getElementById('search-title');
  const searchBriefInput = document.getElementById('search-brief');
  const searchDateInput = document.getElementById('search-starting-year');
  
  function showModal(game) {
    document.getElementById('modal-title').textContent = game.title;
    document.getElementById('modal-src').src = game.src;
    document.getElementById('modal-brief').textContent = `brief: ${game.brief}`;
    document.getElementById('modal-tags').textContent = `tags: ${game.tags}`;
    document.getElementById('modal-starting-year').textContent = `Starting Year: ${game.date}`;
    document.getElementById('modal').style.display = 'block';
  }
  
  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });
  
  function createElement(tag, classTitle, text) {
    const element = document.createElement(tag);
    if (classTitle) element.classTitle = classTitle;
    if (text) element.textContent = text;
    return element;
  }
  
  function displayMembers(membersData) {
    membersList.innerHTML = '';
    membersData.sort((a, b) => a.title.localeCompare(b.title))
      .map(memberData => new Games(memberData))
      .forEach(game => membersList.appendChild(game.createGameCard()));
  }
  
  function init() {
    setupEventListeners();
    displayMembers(games_list);
  }
  
  
  // Adjust the font size after member card creation:
  function adjustFontSize(element) {
    let length = element.textContent.length;
  
    if (length > 20) {
      element.style.fontSize = '80%';
    } else if (length > 25) {
      element.style.fontSize = '70%';
    } // ... Continue for other lengths
  }
  const card = createElement('div', 'card');
  
  const briefBox = card.querySelector('.brief-box');
  const tagsBox = card.querySelector('.tags-box');
  
  adjustFontSize(briefBox);
  adjustFontSize(tagsBox);