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
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.className = 'grid-item';
            grid.appendChild(div);
        }
    }
}

//get size 
let size = document.getElementById('myRange');
console.log(size.value);
size.addEventListener('change', function() {
    addDivs(size.value);
}
);

