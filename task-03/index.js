/**
 * პირობა იხილეთ HTML ფაილში
 */
const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
];

const list = document.querySelector('.user-list');
function createCard(name, email, avatar, id){
  const div = document.createElement('div');
  div.setAttribute('calss', 'card');
  div.innerHTML = `
     <div class="card-header">
            <div class="user-info">
              <div class="avatar">
                <img src="${avatar}" alt="John Doe" />
              </div>
              <div class="user-details">
                <h3>${name}</h3>
                <p class="user-email">${email}</p>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p class="user-id">User ID: ${id}</p>
          </div>
  `
  list.appendChild(div);
}

function deleteCards(div){
    div.remove();
}

function displayCards(){
  users.map((user) => {
    createCard(user.name, user.email, user.avatar, user.id);
  })
}

const BUTTON = document.querySelector('#toggleButton');
displayCards();
let check = false;
BUTTON.addEventListener('click', () => {
  if(check == false){
    BUTTON.innerText = 'Show Users';
    list.style.display = "none";
    check = true;
  }else{
    list.style.display = "grid";
    BUTTON.innerText = 'Hide Users';
    check = false;
  }
})

