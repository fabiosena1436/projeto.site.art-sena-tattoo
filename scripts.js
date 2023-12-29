const list = document.querySelector('#haircuts-list')
const buttonCatalog = querySelector('#button-catalog')


function showAll(catalogTattooArray) {

    let myLi = ''

    catalogTattooArray.forEach((catalog) => {

        myLi += `
            <div class="haircuts" data-aos="fade-up" data-aos-delay="150">
                <img src=${catalog.src}>
                <div class="haircut-info">
                    <strong>${catalog.name} R$:${catalog.price} <br>Tamanho máximo 5cm</strong>
                </div>
            </div>
        `

    })


    list.innerHTML = myLi

}




buttonCatalog.addEventListener('click', () => showAll(catalogTattoo))