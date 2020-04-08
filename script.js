
'use strict';


class User {
  constructor(id, name, email, isAuthorised) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.isAuthorised = isAuthorised;
  }
};
class Comment {
  constructor(user, post, comment) {
    this.user = user,
    this.post = post,
    this.comment = comment;
  } 
};
class Post {
  constructor(id, userId, image, descriprtion) {
    this.id = id,
    this.userId = userId,
    this.image =  image,
    // так можно обращаться к конкретному юзеру
    this.descriprtion = descriprtion;
  }
};
//////////////////////////////////////////

function authorize(user) {
  user.isAuthorised = true;
}
const user = new User(1, "Anna", "anna@gmail.com", false);
authorize(user);
const post = new Post(1, user.id, "images/angryCat.jpg",  "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque libero minima corporis accusamus nobis velit.");
const user2 = new User(2, "Alex","gena@gena.com", false);
authorize(user2);
const comment = new Comment(user2.name, post.id, "Kitty you are so cute! Don't be so angry)) with love<3");

console.log(user);
console.log(post);
console.log(user2);
console.log(comment);

let posts = [];

function newPost(i) {
  return new Post(i+2, user.id,  "text" + i, 0);
};

for(let i = 0; 6 > i; i++) {
  posts[i] = newPost(i);
};

function toPrint(post) {
  console.log(post);
};
posts.forEach(toPrint);

function like (post, postId, isLiked) {
  if(post.id === postId) {
    isLiked ? post.likes++ : post.likes--;
    console.log(post);
  };
};

let postId = 4;

let isLiked = true;

for(let i = 0; i < posts.length; i++) {
  like(posts[i], postId, isLiked);
};


//hiding and showing splash page and no-scroll

  // let catPage = document.querySelector(".no-scroll");
  let logIn = document.querySelector(".page-splash");
  //   console.log(catPage);

  let logHide = document.querySelector(".page-splash").hidden = false;
  if(!logHide){
      logIn.addEventListener("click", hideSplashScreen);
  } 
  // else {
  //   logIn.addEventListener("click", showSplashScreen);
  // }

  
function showSplashScreen(){
  logIn.classList.add("page-slash").hidden = false;
  let body = document.querySelector("body");
  body.classList.add("no-scroll");
}

// showSplashScreen();

function hideSplashScreen(){
    document.querySelector(".page-splash").hidden = true;
    let body = document.querySelector("body");
    body.classList.remove("no-scroll");
}

function createCommentElement(comment){
    let elem= document.createElement('div')
    elem.classList.add('py-2');
    elem.classList.add('pl-3');
    elem.innerHTML = '<a href="#" class="muted">'  + comment.user + '</a>' + 
  '<p>' + comment.comment + '</p>';
  return elem;
}

function createPostElement(post){
  let elem = document.createElement('div');
  elem.classList.add('card');
  elem.classList.add('my-3');
  elem.innerHTML = 
  '<div>' +
    '<img class="d-block w-100" src="' + post.image + '" alt="Post image">' +
  '</div>' +
    '<div class="px-4 py-3">' +
    '<div class="d-flex justify-content-around">' +
      '<span class="h1 mx-2 text-danger">' +
      '<i class="fas fa-heart"></i>' +
      '</span>' +
      '<span class="h1 mx-2 muted">' +
      '<i class="far fa-heart"></i>' +
      '</span>' +
      '<span class="h1 mx-2 muted">' +
      '<i class="far fa-comment"></i>' +
      '</span>' +
      '<span class="mx-auto"></span>' +
      '<span class="h1 mx-2 muted">' +
      '<i class="far fa-bookmark"></i>' +
      '</span>' +
      '<span class="h1 mx-2 muted">' +
      '<i class="fas fa-bookmark"></i>' +
      '</span>' +
    '</div>' +
  '<hr>' +
  '<div>' +
    '<p>' + post.descriprtion + '</p>' +
  '</div>' +
  '<hr>' +
  '<div id="comments">' +
  '<div class="py-2 pl-3">' +
          '<a href="#" class="muted">' + 'someusername' + '</a>' +
          '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.' + '</p>' +
        '</div>' +
  '</div>' + '</div>';
  return elem;
}


function addPost(postElement){
    document.getElementById("posts-container").append(postElement);
}

let postsCont = createPostElement(post);
addPost(postsCont);
document.getElementById('comments').append(createCommentElement(comment));







