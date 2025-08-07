const buttons = document.querySelectorAll('.button');
const bdy = document.querySelector('body');

buttons.forEach( function(btn) {
   btn.addEventListener('click', function(e){
    if(e.target.id == 'grey'){
        // bdy.style.backgroundColor = 'grey';
        // or
        bdy.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'white'){
        bdy.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'blue'){
        bdy.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'yellow'){
        bdy.style.backgroundColor = e.target.id;
    }

   });
});
