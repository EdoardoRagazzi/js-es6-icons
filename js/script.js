// Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. Milestone 2 Coloriamo le icone per tipo
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];
print(icons);
//---------------------MILESTONE-1------------------------//
function print(array) {
    array.forEach((element) => {
        console.log(element);

        const { name, prefix, family } = element;

        const elementHTML = `
          <div>
            <i class="${family} ${prefix}${name}"></i>
            <div class="title">${name.toUpperCase()}</div>
          </div>
          `;

        document.getElementById('icons').innerHTML += elementHTML;
    });
};


//-----------------MILESTONE 2 -----------------//

// const coloredArray = icons.map((element) => {
//     const { name, prefix, type, family } = element;
//     console.log(element);
//     let color = 'purple';
//     if (element.type == 'animal') {
//         color = 'green';
//     } else if (element.type == 'vegetable') {
//         color = 'orange';
//     }
//     return {
//         ...element,  //Spread tutti gli elementi di quell'oggetto
//         color
//     }

// });







// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone