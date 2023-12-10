
            // Firebase-Konfiguration
            const firebaseConfig = {
                  apiKey: "AIzaSyCdKFg1F3IJx0YJ3m8tqGRWwZXY5-nkFOk",
                  authDomain: "portfolio-e39c4.firebaseapp.com",
                  databaseURL: "https://portfolio-e39c4-default-rtdb.europe-west1.firebasedatabase.app/",
                  projectId: "portfolio-e39c4",
                  storageBucket: "portfolio-e39c4.appspot.com",
                  messagingSenderId: "514938210125",
                  appId: "1:514938210125:web:2cfa38f06419441c37d904",
                  measurementId: "G-SDP9011BY6",
                  };

firebase.initializeApp(firebaseConfig);
// Referenz zur Datenbank
const db = firebase.database();

// Initialize Quill editor
var quill = new Quill('#editor', {
      theme: 'snow'
  });
  
  // Formular zum Erstellen von Posts
  const postForm = document.getElementById('postForm');
  
  postForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Speichern Sie den Inhalt des Editors in der Datenbank
      const title = document.getElementById('title').value;
      const content = quill.root.innerHTML; // Get HTML content of the editor
      const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
  
      db.ref('posts').push({
          title,
          content,
          tags
      });
  
      postForm.reset();
      quill.setContents([]); // Reset the editor
  });


