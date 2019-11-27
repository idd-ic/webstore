const product1 = {
    img: `img/d.black.png`,
    name: `That Dress Tho`,
    price: `$39.00`,
    descrp: `Very comfy sleeveless corduroy dress`,
    stock: `1 left!`
};

function getContainersAsHtmlString(containers) {
    return `<article class="container">
                <a href="product.html"> <img src="${containers.img}" alt="Product Image">  </a>
                <div class="intro">
                    <h3>${containers.name}</h3>
                    <span><del>$50.00</del>       <ins>${containers.price}</ins></span>
                </div>
        
                <section class="deetspro1">
                    <ul>
                        <li><b>${containers.descrp}</b> </li>
                        <li><input type="radio"> <span>Light Brown</span> <input type="radio">  <span> Indigo</span><input type="radio">  <span>White</span></li>
                        <li><input type="radio"> <span>M</span> <input type="radio">  <span>L</span> <input type="radio">  <span>XL</span></li>
                        <li><span><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i></span></li>
                    </ul>
                </section>
        
                <section class="final">
                    <button class="check"> Add to Bag </button>
                    <button class="fave" type="button"><i class="material-icons">favorite_border</i></button>
                    <p>${containers.img}</p>
                </section>
            </article>`;
}

document.getElementById('container').innerHTML = getContainersAsHtmlString (product1)















