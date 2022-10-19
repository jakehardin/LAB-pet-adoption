const pets = [
  {
    id: 1,
    name: "Jack",
    color: "Green",
    specialSkill: "Knows that X marks the spot.",
    type: "dog",
    imageUrl: "http://www.funcage.com/blog/wp-content/uploads/2011/10/pirate-dog.jpg"
  },
  {
    id: 2,
    name: "Dylan",
    color: "Brown",
    specialSkill: "Uses the force to communicate with the plug.",
    type: "dino",
    imageUrl: "https://www.partybell.com/images/Product/Large/BS-18842.jpg"
  },
  {
    id: 3,
    name: "Carmin",
    color: "Yellow",
    specialSkill: "Actually dressed up for halloween this year.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/736x/5c/37/f1/5c37f13e4ed4ef5d695907ac96b9287a--cats-in-costumes-pet-halloween-costumes.jpg"
  },
  {
    id: 4,
    name: "Reggie",
    color: "Purple",
    specialSkill: "Definitely a Fed.",
    type: "dino",
    imageUrl: "http://2.bp.blogspot.com/_nJLGJOxc1is/TQan03Zrj0I/AAAAAAAAAEk/jIO1yNH0N64/s1600/velociraptor.jpg"
  },
  {
    id: 5,
    name: "Spidey",
    color: "Brown",
    specialSkill: "Thinks that Marvel is cringe now.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/34/0d/40/340d40a8a62f07058af96f3defd05749.jpg"
  },
  {
    id: 6,
    name: "Wrigley",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/236x/fb/c0/d8/fbc0d89e399b4fa052da8a085f4b737e--the-cutest-the-ojays.jpg?nii=t"
  },
  {
    id: 7,
    name: "Milo",
    color: "Yellow",
    specialSkill: "Has drip.",
    type: "cat",
    imageUrl: "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1569962759/breaded-cat-costume.png?itok=SZuf8HEn"
  },
  {
    id: 8,
    name: "Morgan",
    color: "Grey",
    specialSkill: "Seperates the art from the artist, when it comes to listening to Kanye West.",
    type: "dino",
    imageUrl: "https://vignette.wikia.nocookie.net/puppet/images/e/eb/BarneytheBlueDinosaur.png/revision/latest?cb=20201016202945"
  },
  {
    id: 9,
    name: "Trumpy",
    color: "Brown",
    specialSkill: "Says he will drain the litterbox. Does not.",
    type: "cat",
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/6LTbcL6SM7RHnsWmotr3MfrTZhQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/16/662/n/1922243/59eb9e7042b951ea_netimgqj73KW/i/Trump-Cat-Costume.jpg"
  },
  {
    id: 10,
    name: "Sam",
    color: "Blue",
    specialSkill: "Does not have social media.",
    type: "cat",
    imageUrl: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/10/PRI_170613652.jpg?quality=90&strip=all&zoom=1&resize=540%2C405&ssl=1"
  },
  {
    id: 11,
    name: "Miss Kristine",
    color: "Orange",
    specialSkill: "In an open relationship.",
    type: "dino",
    imageUrl: "https://vignette.wikia.nocookie.net/parody/images/2/23/Shrek-disneyscreencaps.com-3961.jpg/revision/latest?cb=20170608172537"
  },
  {
    id: 12,
    name: "Rex",
    color: "Green",
    specialSkill: "Respects pronouns.",
    type: "dog",
    imageUrl: "https://hips.hearstapps.com/clv.h-cdn.co/assets/17/34/4000x2661/gettyimages-831453282_super_1.jpg?resize=768:*"
  },
  {
    id: 13,
    name: "Larry",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://pre00.deviantart.net/b521/th/pre/f/2017/297/b/7/b7c7bbe70191e1c45a2e10cc94aa5ed2-d3axzcl.png"
  },
  {
    id: 14,
    name: "Tyler",
    color: "Brown",
    specialSkill: "Still not over middle school girlfriend.",
    type: "cat",
    imageUrl: "https://cdn.shopify.com/s/files/1/0344/6469/files/buff-cat.png?v=1528231775"
  },
  {
    id: 15,
    name: "Kayla",
    color: "Red",
    specialSkill: "She did not give you napkins and she forgot to not put pickles on your burger.",
    type: "cat",
    imageUrl: "http://cdn.shopify.com/s/files/1/2021/3203/products/Cat_Costume3_1024x1024.jpg?v=1571709336"
  },
  {
    id: 16,
    name: "Poppit",
    color: "Brown",
    specialSkill: "Owners are staunch Catholics.",
    type: "dino",
    imageUrl: "https://i.ytimg.com/vi/cXKJZSYqbUI/maxresdefault.jpg"
  },
  {
   id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (Life of Pi).",
    type: "cat",
    imageUrl: "https://i.redd.it/w95s9mpu1cx31.jpg"
  },
  {
    id: 18,
    name: "Spencer",
    color: "Brown",
    specialSkill: "Is currently unemployed but is going to start applying to things on Indeed soon.",
    type: "dino",
    imageUrl: "https://fsmedia.imgix.net/d6/07/53/b5/86bb/43b5/9b48/7a59522acb30/dinosaur-chicken-hybrid.png?rect=0,0,1280,960&dpr=2&auto=format,compress&q=75"
  },
  {
    id: 19,
    name: "Myra",
    color: "Blue",
    specialSkill: "Died a slow painful death.",
    type: "dog",
    imageUrl: "https://www.thelabradorsite.com/wp-content/uploads/2015/08/old-lab.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Didn't stop trick-or-treating until he was 21.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/37/89/fd/3789fdd109d8a7af94f50666d16c9080.jpg"
  },
  {
    id: 21,
    name: "Miss Piggy",
    color: "Red",
    specialSkill: "Miss Piggy is one of the Muppet characters known for her breakout role in Jim Henson's The Muppet Show.",
    type: "pig",
    imageUrl: "https://img.washingtonpost.com/rf/image_1484w/WashingtonPost/Content/Blogs/celebritology/Images/2012-01-18T085537Z_01_TPE03_RTRIDSP_3_GERMANY-1925.jpg?uuid=Je1CAFDlEeGtdLUSfMCfnw"
  },
  {
      id: 22,
    name: "Christina",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about sensitive topics.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/ab/8b/7e/ab8b7e1d3dc6d0ab4a6fba7b165dbf2e.jpg"
  },
  {
      id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine and eating children.",
    type: "dog",
    imageUrl: "https://img.cinemablend.com/filter:scale/quill/c/4/0/f/d/0/c40fd083b9758f9d9dc46d8c5ecf3ade1de18c90.jpg?mw=600"
  },
  {
      id: 24,
    name: "Bolt",
    color: "Brown",
    specialSkill: "A good movie.",
    type: "dog",
    imageUrl: "http://cdn.playbuzz.com/cdn/c68be748-865a-48e7-8a19-52e442dde4ae/e69ed363-90e9-4f84-8afc-6707dd7b9019.jpg"
  },
  {
    id: 25,
    name: "Alexa",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://i.redd.it/rq7o663s2i741.jpg"
  },
  {
      id: 26,
    name: "Snoop Dogg",
    color: "Yellow",
    specialSkill: "literally just Snoop Dogg.",
    type: "dog",
    imageUrl: "https://celebvogue.com/wp-content/uploads/2019/10/Snoop-Dogg.jpg"
  },
  {
      id: 27,
    name: "Leo",
    color: "Green",
    specialSkill: "His house will usually be the location for any sesh the boys are scheming.",
    type: "dino",
    imageUrl: "https://vignette.wikia.nocookie.net/disney/images/f/f4/Dinosaur-disneyscreencaps.com-4802.jpg/revision/latest?cb=20150504012844"
  },
  {
      id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Buys books just to look smart.",
    type: "cat",
    imageUrl: "https://st2.depositphotos.com/3047333/6354/i/950/depositphotos_63543371-stock-photo-wise-cat-reading-book.jpg"
  },
  {
      id: 29,
    name: "Chicho",
    color: "Green",
    specialSkill: "Is experiencing the eternal atonement of sins.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/736x/e1/5e/de/e15ede7bdf7e405b497400ef329d9dd4.jpg"
  },
  {
      id: 30,
    name: "Dave",
    color: "Red",
    specialSkill: "Use to think conspiracy theories were fun.",
    type: "dino",
    imageUrl: "https://www.lintelligencer.com/wp-content/uploads/2020/07/Study-Famous-Jurassic-Park-dinosaur-the-Dilophosaurus-was-bigger-and-more-powerful-than-the-1993-film-shows.jpg"
  }
];

 const app = document.querySelector("#app");

 for (let i = 0; i < pets.length; i++) {
   app.innerHTML += 
 `<div class="card text-center">
      <div class="card-header">
         ${pets[i].name}
       </div>
   <div class="card-body">
     <img class="img" src=${pets[i].imageUrl} alt="Picture of pet">
     <p class="card-text">${pets[i].color}</p>
     <p>${pets[i].specialSkill}</p>
     <a href="#" class="btn btn-primary">${pets[i].type}</a>
   </div>
 </div>`
}

const renderToDom = (divId, htmlToRender) => {
const selectedDiv = document.querySelector(divId);
selectedDiv.innerHTML = htmlToRender;
};

const petsOnDom = (array) => {
let domString = "";
for (const animal of array) {
  domString += `<div class="card text-center">
       <div class="card-header">
             ${animal.name}
        </div>
    <div class="card-body">
         <img class="img" src=${animal.imageUrl} alt="Picture of pet for adoption">
       <p class="card-text">${animal.color}</p>
        <p>${animal.specialSkill}</p>
         <a href="#" class="btn btn-primary">${animal.type}</a>
         <button class="btn btn-danger" id="delete--${animal.id}">Delete</button>
    </div>
  </div>`;
}

renderToDom("#app", domString);
}


const filter = (array, petTypeString) => {
const petTypeArray = [];

for (const animal of array) {
  if (animal.type === petTypeString) {
    petTypeArray.push(animal);
  }
}

return petTypeArray;
}

const allPetsButton = document.querySelector("#all-button");

const dogsButton = document.querySelector("#dog-button");

const catsButton = document.querySelector("#cat-button");

const dinosButton = document.querySelector("#dino-button");

allPetsButton.addEventListener('click', () => {
  petsOnDom(pets);
  });

dogsButton.addEventListener('click', () => {
  const petsAreDogs = filter(pets, 'dog');
  petsOnDom(petsAreDogs);
  });

catsButton.addEventListener('click', () => {
  const petsAreCats = filter(pets, 'cat');
  petsOnDom(petsAreCats);
  });

dinosButton.addEventListener('click', () => {
const petsAreDinos = filter(pets, 'dino');
petsOnDom(petsAreDinos);
});

const form = document.querySelector('form');

const createPet = (e) => {
  e.preventDefault(); // EVERY TIME YOU CREATE A FORM

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#imageUrl").value
  }

  pets.push(newPetObj);
  petsOnDom(pets);
  form.reset();
}

form.addEventListener('submit', createPet);







app.addEventListener('click', (e) => {
  // 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    // 4. add logic to remove from array
    const index = pets.findIndex(e => e.id === Number(id));
    pets.splice(index, 1);

    // 5. Repaint the DOM wiconst app = document.querySelector("#app");th the updated array
    petsOnDom(pets);
  }
});

const startApp = () => {
  petsOnDom(pets);
  events(); // ALWAYS LAST
}

startApp();
