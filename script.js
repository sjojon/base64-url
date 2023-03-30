let file = '';

function view() {
    document.getElementById('app').innerHTML = /*html*/ `
    <input type="file" id="fileInput" onchange="input(this)"><hr>
    <div>
    <img height="100px" width="100px" id="image" src="${file}" alt="Profilbilde">
    </div>
    `;
} view();


function input(fileInput) {
    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.addEventListener('load', () => {
        file = reader.result;
        document.getElementById('image').setAttribute('src', file);
        console.log(reader.result); // Logger stringen til bildet i consollen
    });

    reader.readAsDataURL(file);
    view();
}

// Bilder hentet fra https://randomuser.me/


// ORIGINAL:
// fileInput.addEventListener('change', e => {
//     const file = fileInput.files[0];
//     const reader = new FileReader();

//     reader.addEventListener('load', () => {
//         console.log(reader.result);
//     });

//     reader.readAsDataURL(file);
// });