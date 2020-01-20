const xhr = new XMLHttpRequest();
let users;
let btns;

xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts', true);
xhr.send();
xhr.addEventListener('load', function() {
    if (xhr.status == 200) {
        const json = JSON.parse(xhr.response);
        const list = document.querySelector('.users-list');
        users = [[]];
        let prevId = 1;
        for (let item of json) {
            prevId != item.userId ? users.push([]) : void 0;

            users[item.userId-1].push({title: item.title, body: item.body});

            prevId = item.userId;
        }

        for (let [key, user] of users.entries()) {   
            let item = `<article class="user-cnt" data-id="${key+1}">
            <h2 class="user-name">Użytkownik nr ${key+1}</h2>
            <div class="address">
                Phone: 500 600 600<br>
                email: <a href="mailto: email@wp.pl">email@wp.pl</a>
            </div>
        
            <button type="button" class="btn show-posts">
                Show posts
            </button>
        
            <ul class="user-posts">
               
            </ul>
        </article>`;
            list.innerHTML += item;
        }

        btns = document.querySelectorAll('.show-posts');

        btns.forEach(function(btn){
            btn.addEventListener('click', function() {
                togglePosts(this)
            });
        })

    }
})


function togglePosts(btn) {
    
    let id = btn.parentNode.dataset.id;
    let posts = users[id];
    let postsList = btn.nextElementSibling;

    if (postsList.style.display != 'block') {
        for (let post of posts) {
            let item = `<li class="post">
                                <h3 class="post-title">${post.title}</h3>
                                <div class="post-body">${post.body}</div>
                        </li>`;
            postsList.innerHTML += item;
        }
        postsList.style.display = 'block';
        btn.innerHTML = 'Hide posts';
    } else {
        postsList.style.display = 'none';
        btn.innerHTML = 'Show posts';
        postsList.innerHTML = '';
    }
}