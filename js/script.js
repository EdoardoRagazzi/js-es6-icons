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

const coloredArray = colorIcons(icons)
print(coloredArray);

// CREAZIONE DI UN NUOVO ARRAY CON CICLO FOR EACH PER SELEZIONARE LE VARIE TIPOLOGIE
const types = [];
icons.forEach((element) => {
    if (!types.includes(element.type)) {
        types.push(element.type)
        document.getElementById('type').innerHTML += `<li><button class="dropdown-item" id="${element.type}" type="button">${element.type}</button></li>`;
    }
});

document.getElementById('type').addEventListener("click", function (event) {
    // console.log(event.target.id);
    //document.getElementById('${element.type}').value;

    const valoreSelect = event.target.id;
    if (valoreSelect == 'all') {
        print(coloredArray);
    } else {
        console.log(valoreSelect);
        const filteredIcons = coloredArray.filter((element) => {
            return element.type == valoreSelect;
        });
        print(filteredIcons);
    }

});

// console.log(types);
// let select = document.getElementById('type');
// console.log(select);

// select.addEventListener("click", function () {
//     document.getElementById('${element.type}').value;
//     const valoreSelect = select;
//     console.log(valoreSelect);
//     const filteredIcons = icons.filter((element) => {
//         return element.type == valoreSelect;
//     });
//     print(filteredIcons);

// });


//---------------------MILESTONE-1---------WITH FUNCTION---------------//
function colorIcons(array) {
    const coloredArray = icons.map((element) => {

        console.log(element);
        let color = 'purple';
        if (element.type == 'animal') {
            color = 'green';
        } else if (element.type == 'vegetable') {
            color = 'orange';
        }
        return {
            ...element,  //Spread tutti gli elementi di quell'oggetto
            color
        }

    });
    return coloredArray;
}
function print(array) {
    document.getElementById('icons').innerHTML = '';

    array.forEach((element) => {
        console.log(element);
        //--------------destructuring-------------------//
        const { color, name, prefix, family } = element;

        const elementHTML = `
          <div>
            <i class="${family} ${prefix}${name}" style="color:${color}" ></i>
            <div class="title">${name.toUpperCase()}</div>
          </div>
          `;

        document.getElementById('icons').innerHTML += elementHTML;
    });
};
//-----------------MILESTONE 2 -----------------//


// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
//--------------------MILLESTONE 3---------------------//
