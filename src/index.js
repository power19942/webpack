const button = document.createElement('button');
button.innerText = 'Click';
button.onclick = () =>{
    System.import('./img_view').then((m)=>{
        m.default();
    });
};

document.body.appendChild(button);