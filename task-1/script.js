const profile = document.getElementById('profile');

profile.style.backgroundColor = 'navy';
profile.style.color = 'pink';
profile.style.padding = '15px';
profile.style.fontSize= '30px';

profile.style.textAlign = 'center';


//  task-2 
// Task - 2

const x = document.getElementsByClassName("important");
console.log(x);

for (let i = 0; i < x.length; i++) {

    x[i].style.color = 'red';
    x[i].style.fontWeight = 'bold';
    x[i].style.fontSize = '15px';
}