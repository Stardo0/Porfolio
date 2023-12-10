            // Konfigurieren und initialisieren Sie Firebase
            const firebaseConfig = {
                  apiKey: "AIzaSyCdKFg1F3IJx0YJ3m8tqGRWwZXY5-nkFOk",
                  authDomain: "portfolio-e39c4.firebaseapp.com",
                  databaseURL: "https://portfolio-e39c4-default-rtdb.europe-west1.firebasedatabase.app",
                  projectId: "portfolio-e39c4",
                  storageBucket: "portfolio-e39c4.appspot.com",
                  messagingSenderId: "514938210125",
                  appId: "1:514938210125:web:2cfa38f06419441c37d904",
                  measurementId: "G-SDP9011BY6"
                  };
                  firebase.initializeApp(firebaseConfig);
                  

                  // Referenz zur Datenbank
                  const db = firebase.database();

                  // Blogposts abrufen und anzeigen
function createPostPreviews(posts) {
      const postsContainer = document.getElementById('posts');
      postsContainer.innerHTML = '';
      for(let id in posts) {
          const post = posts[id];
          const postElement = document.createElement('div');
          const tagsElement = post.tags 
              ? `<div class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>`
              : '';
  
          postElement.className = 'post-preview';
          postElement.innerHTML = `
              <h2 class="title">${post.title}</h2>
              <p>${post.content.substring(0, 100)}...</p>
              ${tagsElement}
          `;
          postElement.addEventListener('click', () => {
              postsContainer.innerHTML = `
                  <div class="post-full">
                      <h2 class="title">${post.title}</h2>
                      <p>${post.content}</p>
                      <button id="backButton">Zurück</button>
                  </div>
              `;
              const backButton = document.getElementById('backButton');
              if (backButton) {
                  backButton.addEventListener('click', () => {
                      createPostPreviews(posts);
                  });
              }
          });
          postsContainer.appendChild(postElement);
      }
  }
  
  // Blogposts abrufen und anzeigen
  db.ref('posts').on('value', (snapshot) => {
      const posts = snapshot.val();
      createPostPreviews(posts);
  });