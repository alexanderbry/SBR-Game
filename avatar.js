// Array of avatar data
const avatars = [
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
    {
      name: "Character 3",
      gender: "Non-binary",
      desc: "A character with a secret past.",
      img: "https://images.unsplash.com/photo-1619983084239-c2c2b8b3b2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    },
    // Add more avatars as needed
  ];
  
  let currentAvatarIndex = 0;
  
  // Elements to update
  const avatarNameElement = document.querySelector('.nama');
  const avatarGenderElement = document.querySelector('.gender');
  const avatarDescElement = document.querySelector('.desc');
  const avatarImgElement = document.querySelector('.card img');
  
  // Function to update the avatar card
  function updateAvatarCard(index) {
    avatarNameElement.textContent = avatars[index].name;
    avatarGenderElement.textContent = avatars[index].gender;
    avatarDescElement.textContent = avatars[index].desc;
    avatarImgElement.src = avatars[index].img;
  }
  
  // Event listeners for carousel controls
  document.querySelector('[data-carousel-prev]').addEventListener('click', () => {
    currentAvatarIndex = (currentAvatarIndex > 0) ? currentAvatarIndex - 1 : avatars.length - 1;
    updateAvatarCard(currentAvatarIndex);
  });
  
  document.querySelector('[data-carousel-next]').addEventListener('click', () => {
    currentAvatarIndex = (currentAvatarIndex < avatars.length - 1) ? currentAvatarIndex + 1 : 0;
    updateAvatarCard(currentAvatarIndex);
  });
  
  // Initialize with the first avatar
  updateAvatarCard(currentAvatarIndex);
  
  // Functionality for the CREATE button
  document.querySelector('.btn button').addEventListener('click', () => {
    const userName = document.querySelector('#Username').value;
    const userDesc = document.querySelector('#Description').value;
  
    if (userName && userDesc) {
      avatars.push({
        name: userName,
        gender: "Custom",
        desc: userDesc,
        img: avatars[currentAvatarIndex].img, // Use the current avatar's image
      });
  
      alert("New avatar created!");
    } else {
      alert("Please fill in both the Username and Description fields.");
    }
  });
  