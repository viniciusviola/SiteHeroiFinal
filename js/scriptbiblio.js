const lista = [4, 17, 30, 34, 36, 40, 57, 63, 70, 78, 93, 95, 96, 97, 99, 106, 107, 112, 119, 136, 141, 145, 149, 154, 157, 160, 162, 165, 196, 201, 204, 207, 208, 209, 213, 222, 225, 226, 228, 232, 233, 234, 237, 238, 242, 247, 273, 274, 275, 278, 280, 289, 294, 299, 303, 307, 308, 309, 313, 321, 322, 332, 346, 354, 367, 370, 379, 383, 391, 404, 414, 470, 481, 485, 487, 490, 498, 502, 541, 566, 567, 569, 601, 638, 644, 655, 657, 659, 687, 690, 697, 701, 723, 717, 729];
const showMore =document.getElementById("show-more-button");
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const body = document.querySelector("body");

// let inpuData = ""
// let page = 1;

async function getResults(){
    // const inputData = inputEl.value;
    const results = [];
    for(let i=0; i < lista.length;i++){
        const data = await fetch('https://akabab.github.io/superhero-api/api/id/'+lista[i]+'.json', {
            method: "GET"
        }).then(res => res.json());
        
        results.push(await data)   ; 
    }
    // return results;
    results.map((result) => {
        const imageWraper = document.createElement('div');
        imageWraper.classList.add("search-result");
        // const image = document.createElement('img');
        // image.src = result.images.sm;
        // image.alt = result.name;
        // image.id = "Myimg";
        // const imageName = document.createElement('a');
        // imageName.textContent = result.name + ' | ' + result.appearance.race;
        const modalContent = document.createElement('div');
        modalContent.innerHTML = `
        <a class="btn " data-bs-toggle="modal" href="#${"heroi"+result.id}" role="button">
        <img src="${result.images.sm}"  id="Myimg" alt="${result.name}">
        <a>${result.name + ' | ' + result.appearance.race}</a>
    </a>    
    <div class="modal fade" id="${"heroi"+result.id}" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" >
                <div class = "app-body" style="overflow-y=hidden">
                    <div class = "app-body-content" style="height: 100%">
                        <!-- app body thumbnail -->
                        <div class = "app-body-content-thumbnail">
                            <img src = "${result.images.sm}">
                        </div>
                        <!-- end of app body thumbnail -->
                        <div class = "app-body-content-list" style = "height: 100%;
                        overflow-y: scroll;
                        padding: 0 20px;" >
                            <div class = "name">${result.name}</div>
    
                            <!-- tabs head -->
                            <div class = "app-body-tabs-head">
                                <button type = "button" class = "tab-head-single tab-head-single${"heroi"+result.id}" data-id = "1">
                                    <span>powerstats</span>
                                </button>
                                <button type = "button" class = "tab-head-single tab-head-single${"heroi"+result.id}" data-id = "2">
                                    <span>biography</span>
                                </button>
                                <button type = "button" class = " tab-head-single tab-head-single${"heroi"+result.id}" data-id = "3">
                                    <span>appearance</span>
                                </button>
                                <button type = "button" class = "tab-head-single tab-head-single${"heroi"+result.id}" data-id = "4">
                                    <span>connections</span>
                                </button>
                            </div>
                            <!-- end of tabs head -->
    
                            <!-- tabs body -->
                            <div class = "app-body-tabs-body">
                                <!-- powerstats tab -->
                                <ul class = "tab-body-single tab-body-single${"heroi"+result.id} powerstats">
                                    <li>
                                        <div>
                                            <i class = "fa-solid fa-shield-halved"></i>
                                            <span>intelligence</span>
                                        </div>
                                        <span>${result.powerstats.intelligence}</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class = "fa-solid fa-shield-halved"></i>
                                            <span>strength</span>
                                        </div>
                                        <span>${result.powerstats.strength  }</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class = "fa-solid fa-shield-halved"></i>
                                            <span>speed</span>
                                        </div>
                                        <span>${result.powerstats.speed}</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class = "fa-solid fa-shield-halved"></i>
                                            <span>durability</span>
                                        </div>
                                        <span>${result.powerstats.durability}</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class = "fa-solid fa-shield-halved"></i>
                                            <span>power</span>
                                        </div>
                                        <span>${result.powerstats.power}</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class = "fa-solid fa-shield-halved"></i>
                                            <span>combat</span>
                                        </div>
                                        <span>${result.powerstats.combat}</span>
                                    </li>
                                </ul>
                                <!-- end of powerstats tab -->
    
                                <!-- biography tab -->
                                <ul class = "tab-body-single tab-body-single${"heroi"+result.id} biography">
                                    <li>
                                        <span>full name</span>
                                        <span>${result.biography.fullName}</span>
                                    </li>
                                    <li>
                                        <span>alert-egos</span>
                                        <span>${result.biography.alterEgos}</span>
                                    </li>
                                    <li>
                                        <span>aliases</span>
                                        <span>${result.biography.aliases}</span>
                                    </li>
                                    <li>
                                        <span>place-of-birth</span>
                                        <span>${result.biography.placeOfBirth}</span>
                                    </li>
                                    <li>
                                        <span>first-apperance</span>
                                        <span>${result.biography.firstAppearance}</span>
                                    </li>
                                    <li>
                                        <span>publisher</span>
                                        <span>${result.biography.publisher}</span>
                                    </li>
                                </ul>
                                <!-- end of biography tab -->
    
                                <!-- appearance -->
                                <ul class = "tab-body-single tab-body-single${"heroi"+result.id} appearance">
                                    <li>
                                        <span>
                                            <i class = "fas fa-star"></i> gender
                                        </span>
                                        <span>${result.appearance.gender}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class = "fas fa-star"></i> race
                                        </span>
                                        <span>${result.appearance.race}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class = "fas fa-star"></i> height
                                        </span>
                                        <span>${result.appearance.height[1]}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class = "fas fa-star"></i> weight
                                        </span>
                                        <span>${result.appearance.weight[1]}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class = "fas fa-star"></i> eye-color
                                        </span>
                                        <span>${result.appearance.eyeColor}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class = "fas fa-star"></i> hair-color
                                        </span>
                                        <span>${result.appearance.hairColor}</span>
                                    </li>
                                </ul>
                                <!-- end of appearance -->
    
                                <!-- connections -->
                                <ul class = "tab-body-single tab-body-single${"heroi"+result.id} connections">
                                    <li>
                                        <span>group-affiliation</span>
                                        <span>${result.connections.groupAffiliation}</span>
                                    </li>
                                    <li>
                                        <span>relatives</span>
                                        <span>${result.connections.relatives}</span>
                                    </li>
                                </ul>
                                <!-- end of connections -->
                            </div>
                            <!-- end of tabs body -->
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div> 
        
        
          `;

        // imageWraper.appendChild(image);
        // imageWraper.appendChild(imageName);
        imageWraper.appendChild(modalContent)
        searchResults.appendChild(imageWraper);

    const allTabsBody = document.querySelectorAll(`.tab-body-single${"heroi"+result.id}`);
    const allTabsHead = document.querySelectorAll(`.tab-head-single${"heroi"+result.id}`);

    console.log(allTabsBody);
    console.log(allTabsHead);
    let activeTab = 1;

    const init = () => {
        showActiveTabBody();
        showActiveTabHead();
    }

    const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

    const showActiveTabBody = () => {
        hideAllTabBody();
        allTabsBody[activeTab - 1].classList.add('show-tab');
    }

    const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
    const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));

    // even listeners
    window.addEventListener('DOMContentLoaded', () => init());

    // button event listeners
    allTabsHead.forEach(singleTabHead => {
        singleTabHead.addEventListener('click', () => {
            hideAllTabHead();
            activeTab = singleTabHead.dataset.id;
            showActiveTabHead();
            showActiveTabBody();
        });
    });
    })
    
    

    
    
        
    
    
}

getResults();


// async function abas(){
//     const allTabsBody = document.querySelectorAll('.tab-body-single');
//     const allTabsHead = document.querySelectorAll('.tab-head-single');

//     let activeTab = 1, ;

//     const init = () => {
//         showActiveTabBody();
//         showActiveTabHead();
//     }

//     const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

//     const showActiveTabBody = () => {
//         hideAllTabBody();
//         allTabsBody[activeTab - 1].classList.add('show-tab');
//     }

//     const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
//     const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));

//     // even listeners
//     window.addEventListener('DOMContentLoaded', () => init());

//     // button event listeners
//     allTabsHead.forEach(singleTabHead => {
//         singleTabHead.addEventListener('click', () => {
//             hideAllTabHead();
//             activeTab = singleTabHead.dataset.id;
//             showActiveTabHead();
//             showActiveTabBody();
//         });
//     });
// }

// abas();
/*
<div class = "app-body">
                <div class = "app-body-content">
                    <!-- app body thumbnail -->
                    <div class = "app-body-content-thumbnail">
                        <img src = "${result.images.sm}">
                    </div>
                    <!-- end of app body thumbnail -->
                    
                    <div class = "app-body-content-list">
                        <div class = "name">${result.name}</div>

                        <!-- tabs head -->
                        <div class = "app-body-tabs-head">
                            <button type = "button" class = "tab-head-single" data-id = "1">
                                <span>powerstats</span>
                            </button>
                            <button type = "button" class = "tab-head-single" data-id = "2">
                                <span>biography</span>
                            </button>
                            <button type = "button" class = "tab-head-single" data-id = "3">
                                <span>appearance</span>
                            </button>
                            <button type = "button" class = "tab-head-single" data-id = "4">
                                <span>connections</span>
                            </button>
                        </div>
                        <!-- end of tabs head -->

                        <!-- tabs body -->
                        <div class = "app-body-tabs-body">
                            powerstats tab
                            <ul class = "tab-body-single powerstats">
                                <li>
                                    <div>
                                        <i class = "fa-solid fa-shield-halved"></i>
                                        <span>intelligence</span>
                                    </div>
                                    <span>${result.powerstats.intelligence}</span>
                                </li>
                                <li>
                                    <div>
                                        <i class = "fa-solid fa-shield-halved"></i>
                                        <span>strength</span>
                                    </div>
                                    <span>${result.powerstats.strenght}</span>
                                </li>
                                <li>
                                    <div>
                                        <i class = "fa-solid fa-shield-halved"></i>
                                        <span>speed</span>
                                    </div>
                                    <span>${result.powerstats.speed}</span>
                                </li>
                                <li>
                                    <div>
                                        <i class = "fa-solid fa-shield-halved"></i>
                                        <span>durability</span>
                                    </div>
                                    <span>${result.powerstats.durability}</span>
                                </li>
                                <li>
                                    <div>
                                        <i class = "fa-solid fa-shield-halved"></i>
                                        <span>power</span>
                                    </div>
                                    <span>${result.powerstats.power}</span>
                                </li>
                                <li>
                                    <div>
                                        <i class = "fa-solid fa-shield-halved"></i>
                                        <span>combat</span>
                                    </div>
                                    <span>${result.powerstats.combat}</span>
                                </li>
                            </ul>
                            <!-- end of powerstats tab -->

                            <!-- biography tab -->
                            <ul class = "tab-body-single biography">
                                <li>
                                    <span>full name</span>
                                    <span>${result.biography.fullname}</span>
                                </li>
                                <li>
                                    <span>alert-egos</span>
                                    <span>${result.biography.alterEgos}</span>
                                </li>
                                <li>
                                    <span>aliases</span>
                                    <span>${result.biography.aliases}</span>
                                </li>
                                <li>
                                    <span>place-of-birth</span>
                                    <span>${result.biography.placeOfBirth}</span>
                                </li>
                                <li>
                                    <span>first-apperance</span>
                                    <span>${result.biography.firstAppereance}</span>
                                </li>
                                <li>
                                    <span>publisher</span>
                                    <span>${result.biography.publisher}</span>
                                </li>
                                <li>
                                    <span>alignment</span>
                                    <span>${result.biography.alignment}</span>
                                </li>
                            </ul>
                            <!-- end of biography tab -->

                            <!-- appearance -->
                            <ul class = "tab-body-single appearance">
                                <li>
                                    <span>
                                        <i class = "fas fa-star"></i> gender
                                    </span>
                                    <span>Male</span>
                                </li>
                                <li>
                                    <span>
                                        <i class = "fas fa-star"></i> race
                                    </span>
                                    <span>human</span>
                                </li>
                                <li>
                                    <span>
                                        <i class = "fas fa-star"></i> height
                                    </span>
                                    <span>5' 10''</span>
                                </li>
                                <li>
                                    <span>
                                        <i class = "fas fa-star"></i> weight
                                    </span>
                                    <span>170 lb</span>
                                </li>
                                <li>
                                    <span>
                                        <i class = "fas fa-star"></i> eye-color
                                    </span>
                                    <span>blue</span>
                                </li>
                                <li>
                                    <span>
                                        <i class = "fas fa-star"></i> hair-color
                                    </span>
                                    <span>black</span>
                                </li>
                            </ul>
                            <!-- end of appearance -->

                            <!-- connections -->
                            <ul class = "tab-body-single connections">
                                <li>
                                    <span>group--affiliation</span>
                                    <span>Batman Family, Justice League Unlimited</span>
                                </li>
                                <li>
                                    <span>relatives</span>
                                    <span>Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)</span>
                                </li>
                            </ul>
                            end of connections
                        </div>
                        <!-- end of tabs body -->
                    </div>
                </div>
            </div>
*/

// function openModal() {
//     var modal = document.getElementById('myModal');
    
//     modal.style.display = 'flex';
//   }
  
//   // Function to close the modal
//   function closeModal() {
//     var modal = document.getElementById('myModal');
//     modal.style.display = 'none';
//   }

//   // Get the image and attach a click event listener
//   var img = document.getElementById('Myimg');
//   img.addEventListener('click', openModal);
//   console.log(img.addEventListener('click', openModal));
//   // Get the close button and attach a click event listener
//   var closeBtn = document.getElementById('closeModal');
//   closeBtn.addEventListener('click', closeModal);

//   // Close the modal if the user clicks anywhere outside of it
//   window.addEventListener('click', function(event) {
//     var modal = document.getElementById('myModal');
//     if (event.target == modal) {
//       closeModal();
//     }
//   });
//   console.log(openModal());

// async function modalCard(){
//     if(getResults()){
//      // Get the modal
//   var modal = document.getElementById('exampleModalToggle');

//   // Get the image and insert it inside the modal - use its "alt" text as a caption
//   var img = document.getElementById('Myimg');
//     console.log(img);
//   // Get the <span> element that closes the modal
//   var span = document.getElementById('closeModal');

//   // When the user clicks on the image, open the modal
//   img.onclick = function() {
//     modal.style.display = 'flex';
//   }

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = 'none';
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = 'none';
//     }
//   }
//     }
//     else{
//         console.log("ERROR");
//     }
// }

// modalCard();
// async function fetchData() {
//     try {
//         const data = await getResults();
//         const jsonString = JSON.stringify(data);
//         // console.log(jsonString);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }


// let container = document.querySelector(".search-results");
// let loadMoreButton = document.querySelector(".search-results button");
// // console.log(loadMoreButton);
// let currentItem = 6;
// let loadItems = 3;
// const jsonString = fetchData();

// async function loadInitialItems(){
//     let cards =  jsonString;
//     let out = "";
//     let counter = 0;
//     // console.log(cards);
//     for(const card of Object.values(cards)){
//         console.log(card);
//         if (counter < currentItem){
//             out += `
// 	            <div class="search-result">
// 	                <img src="${card.images.sm}" alt="">
//                     <a> ${card.name + ' | ' + card.appearance.race}</a>
// 	            </div>
// 	         `;
//         } 
//         counter++;
//     }
//     let div = document.createElement("div");
//     container.insertBefore(div, loadMoreButton);
//     div.innerHTML = out;
// }

// console.log(loadInitialItems());

// function loadData(){
//     let cards = JSON.parse(localStorage.getItem("results"));
//     let currentDisplay = document.querySelectorAll(".search-result").length;

//     let out = "";
//     let counter = 0;

// }


// console.log(getResults())













        
        