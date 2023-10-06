// Get a reference to all the elements you want to listen to
const elements = document.querySelectorAll('.Movies');

// Attach the event listener using forEach with an arrow function
elements.forEach(element => {
  element.addEventListener('click', (event) => {
    const elementID = event.target.id;
    // You can now use elementID as needed


    var video = document.getElementById('v');

    switch(elementID){
        case 'movie1':
            document.getElementById("context").innerHTML = "Newly born fairy Tinker Bell (Mae Whitman) is transported by the wind to Pixie Hollow on the island of Neverland and learns that, as a tinker, her job is to repair broken items. When Tinker meets some new friends -- water fairy Silvermist (Lucy Liu), garden fairy Rosetta (Kristin Chenoweth) and animal fairy Fawn (America Ferrera) -- she realizes that she will not travel to the mainland to help bring about spring. Sad and upset, Tinker struggles with who she is and who she wants to be.";
            video.src = './asset/tinker.mp4';
            console.log(video)
            video.load();
            video.play();
            break;

        case 'movie2':
            document.getElementById("context").innerHTML = "Friendly fairy Tinker Bell (Mae Whitman) means well but often gets into trouble. All the same, Pixie Hollow has entrusted her with making sure their magical moonstone keeps their pixie dust in plentiful supply. But tragedy strikes when Tinker Bell fumbles this important task -- accidentally breaking the moonstone. In order to get it back into one piece, Tinker Bell will have to find an enchanted mirror and accept a little assistance from pestering pixie Terence (Jesse McCartney).";
            video.src = './asset/tinker2.mp4'
            video.load();
            video.play();
            console.log(video)
            break;

        case 'movie3':
            document.getElementById("context").innerHTML = "Movie 3 Summary";
            
            break;        
    }
  });
});