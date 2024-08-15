// Array of character data
const characters = [
    {
      name: "Rizz Kevin Bramasta",
      gender: "Male",
      desc: "Akulah sang poros dunia.",
      img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    },
    {
      name: "Character 2",
      gender: "Female",
      desc: "She is a mysterious character.",
      img: "https://images.unsplash.com/photo-1586288010580-a2b6e0936483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    },
    // Add more characters as needed
  ];
  
  let currentIndex = 0;
  
  // Elements to update
  const nameElement = document.querySelector('.nama');
  const genderElement = document.querySelector('.gender');
  const descElement = document.querySelector('.desc');
  const imgElement = document.querySelector('.card img');
  
  // Function to update the character card
  function updateCharacterCard(index) {
    nameElement.textContent = characters[index].name;
    genderElement.textContent = characters[index].gender;
    descElement.textContent = characters[index].desc;
    imgElement.src = characters[index].img;
  }
  
  // Event listeners for carousel controls
  document.querySelector('[data-carousel-prev]').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : characters.length - 1;
    updateCharacterCard(currentIndex);
  });
  
  document.querySelector('[data-carousel-next]').addEventListener('click', () => {
    currentIndex = (currentIndex < characters.length - 1) ? currentIndex + 1 : 0;
    updateCharacterCard(currentIndex);
  });
  
  // Initialize with the first character
  updateCharacterCard(currentIndex);
  