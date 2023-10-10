posts = 
[
    {
        src:"/assets/images/download.jpeg",
        date:new Date("2018-10-02:00:00.000Z"), // YYYY-MM-DDTHH:mm:ss.sssZ is the ISO 8601 format
        title:"God of War",
        brief:"Game of the year 2018",
        link:"#",
        tags:["PS4","Gore","Hack and Slash"]
    },
    {
        src:"assets/images/download (1).jpeg",
        date:new Date("2023-10-05:00:00.000Z"),
        title:"The Art of Color Theory in Web Design",
        brief:"Learn how understanding color theory can significantly impact the visual appeal and user experience of your web designs. Discover tips for selecting and combining colors effectively.",
        link:"#",
        tags:["Design","Web Development","Color Theory"]
    },
    {
        src:"assets/images/Super_Mario_Odyssey.jpg",
        date:new Date("2023-10-10:00:00.000Z"),
        title:"Optimizing Website Performance for Speed",
        brief:"Explore techniques and strategies to enhance your website's performance, ensuring faster loading times and a smoother user experience. Speed matters in today's digital landscape.",
        link:"#",
        tags:["Web Development","Performance Optimization"]
    },
 
]

let div = document.createElement("div")
div.classList.add("blog-post")

let img = document.createElement("img")
img.src = "assets/images/download.jpeg"
img.alt = "Sample Image"

div.appendChild(img)

document.querySelector("#posts").appendChild(div)


// {/* <div class="blog-post">
//     <img src="https://picsum.photos/seed/2/320/200" alt="Sample Image">
//     <div class="date">Mon Oct 02 2023</div>
//     <h3>How to design a usable landing page</h3>
//     <p>This article provides valuable insights and tips on creating an engaging and effective landing page that keeps visitors hooked and encourages them to take desired actions.</p>
//     <a href="#">Read More</a>
//     <ul class="tags"><li><a>Design</a></li><li><a>Coding</a></li><li><a>HTML</a></li></ul>
// </div> */}