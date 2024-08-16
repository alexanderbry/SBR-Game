document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen input dan tombol
    const usernameElement = document.getElementById('Username');
    const descriptionElement = document.getElementById('Description');
    const createButton = document.getElementById('create-btn');
    const deleteButton = document.getElementById('delete-btn');
    const doneButton = document.getElementById('done-btn');
    
    // Ambil elemen yang akan diupdate di card
    const cardUsername = document.getElementById('card-username');
    const cardDescription = document.getElementById('card-description');
  
    // Log the elements to check if they are null
    console.log('usernameElement:', usernameElement);
    console.log('descriptionElement:', descriptionElement);
    console.log('createButton:', createButton);
    console.log('deleteButton:', deleteButton);
    console.log('doneButton:', doneButton);
    console.log('cardUsername:', cardUsername);
    console.log('cardDescription:', cardDescription);

// Fungsi untuk memperbarui konten card
function updateCardContent() {
    const username = usernameElement.value;
    const description = descriptionElement.value;

    cardUsername.textContent = username;
    cardDescription.textContent = description;
  }

  // Fungsi untuk menghapus konten card
  function clearCardContent() {
    cardUsername.textContent = '';
    cardDescription.textContent = '';
  }

  // Tambahkan event listener ke tombol
  if (createButton) {
    createButton.addEventListener('click', updateCardContent);
  }

  if (deleteButton) {
    deleteButton.addEventListener('click', clearCardContent);
  }

});