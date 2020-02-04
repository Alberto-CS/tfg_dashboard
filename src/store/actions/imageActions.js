import firebase from 'firebase'


export const addImage = (image, url) => {
    const storageRef = firebase.storage().ref();

    storageRef.child(image.name);

    storageRef.child('images/' + image.name).put(image);

}

export const getImage = (name, id) => {
    
    const storageRef = firebase.storage().ref();
    storageRef.child(name);
    storageRef.child('images/' + name).getDownloadURL().then(function(url) {
        // Or inserted into an <img> element:
        var img = document.getElementById(id);
        img.src = url;

    }).catch(function(error) {
        // Handle any errors
        console.log(error)
    });
      

}

export const getLocalImage = (e) => {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(e);
}

export const getIcon = (name, allergenClass) => {
    
    const storageRef = firebase.storage().ref();
    storageRef.child(name);
    storageRef.child('icons/' + name).getDownloadURL().then(function(url) {
        const img = document.getElementsByName(allergenClass);
        img.forEach(icon => icon.src = url)
    }).catch(function(error) {
        // Handle any errors
        console.log(error)
    });
}