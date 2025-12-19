const button = document.getElementById('button');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');

const buttons = document.getElementsByClassName('button');

console.log(buttons)

for (let i = 0; i< button.lenth; i++) {
    console.log(buttons[i])
}
const customAlert = (message) => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.append(overlay);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    overlay.append(contentDiv)

    const messageH1 = document.createElement('h1');
    messageH1.textContent = message;
    contentDiv.append(messageH1)

    const closeButton = document.createElement('button');
    closeButton.className = 'closeBtn';
    closeButton.textContent = 'OK';
    contentDiv.append(closeButton);

    closeButton.addEventListener('click', () => {
        overlay.remove();
    })

    overlay.addEventListener('click', (event) => {
        if (event.target.className === 'overlay') {
            overlay.remove();
        }
        console.log('event', event)

    })
}
button.addEventListener('click', () => {
    customAlert('My name Asema')
})

button2.addEventListener('click', () => {
    customAlert('i am study in Compass College')
})

button3.addEventListener('click', () => {
    customAlert('My hobby cooking, baking, desing and sleep')
})



// const AboutMe = [Asema, 17]


// const clearContent = () => {
//   contentBlock.innerHTML = '';
// };

// const showFilms = () => {
//   clearContent();

//   const ul = document.createElement('ul');
//   contentBlock.append(AboutMeList);

//   AboutMe.forEach((Asema,17) =>{
//     const li = document.createElement('li')

//     il.appendChild(li)
//   })

//  contentBlock.append


// };

// const addAboutMe = () => {
//   clearContent();
//   const form = document.createElement('form');
//   const titleInput = document.createElement('input');
//   titleInput.placeholder = 'Название фильма';
//   const submitBtn = document.createElement('button');
//   submitBtn.textContent = 'Добавить фильм';
//   form.append(titleInput, submitBtn);
//   contentBlock.append(form);
// };
