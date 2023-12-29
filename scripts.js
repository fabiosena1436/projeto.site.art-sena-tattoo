const list = document.querySelector('.haircuts')
const buttonCatalog = document.querySelector('#button-catalog')


function formatCurrency(value) {

    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}

function showAll(catalogTattooArray) {

    let myLi = ''

    catalogTattooArray.forEach((catalog) => {

        myLi += `
            <div class="haircut" data-aos="fade-up" data-aos-delay="150">
                <img src=${catalog.src}>
                <div class="haircut-info">
                    <strong>${catalog.name} ${formatCurrency(catalog.price)} <br>Tamanho máximo 5cm</strong>
                </div>
            </div>
        `

    })


    list.innerHTML = myLi

}




buttonCatalog.addEventListener('click', () => showAll(catalogTattoo))