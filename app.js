// Path: app.js
// on click of print button print the div block with id 'grid' in a pdf for download
let print = document.getElementById('print');
print.addEventListener('click', function() {
    html2pdf(document.getElementById('grid'), {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
});

// get size from slider and add n*n divs to the grid
function addDivs(size) {
    let grid1 = document.getElementById('grid');
    grid1.innerHTML = '';
    for (let i = 0; i < size; i++) {
        let col= document.createElement('div');
        col.className = 'grid-col';
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.className = 'grid-item';
            col.appendChild(div);
        }
        grid1.appendChild(col);
    }
}

//get size 
let size = 16;
addDivs(16);
console.log(size);
addDivs(size);
// size.addEventListener('change', function() {
//     addDivs(size);
// }
// );

// on click of clear button clear the grid
let clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    let grid1 = document.getElementById('grid');
    grid1.innerHTML = '';
    addDivs(size);
    // grid = document.getElementsByClassName('grid-item');
}
);
// on click of grid-item change the color of the grid-item to black
let grid = document.getElementsByClassName('grid-item');
for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mousedown', function() {
        grid[i].style.backgroundColor = 'black';
    });
}



