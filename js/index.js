const product1 = {
    img: `img/d.black.jpg`,
    name: `That Dress Tho`,
    price: `$39.00`,
    descrp: `Very comfy sleeveless corduroy dress`,
    stock: `Snag the last one!`
};

const product2 = {
    img: `img/o.brown.jpg`,
    name: `Modern Jacket`,
    price: `$70.00`,
    descrp: `Perfect for spring and layering during winter`,
    stock: `Hurry! 10 stocks left!`
};

const product3 = {
    img: `img/p.pink.jpg`,
    name: `Mean Girl Pants`,
    price: `$120.00`,
    descrp: `A very beautiful flare corduroy pants.`,
};

const product4 = {
    img: `img/s.grey.jpg`,
    name: `Where'd You Get That Skirt`,
    price: `$49.00`,
    descrp: `A chic vintage-inspired skirt`,
};

const product5 = {
    img: `img/sw.turquoise.jpg`,
    name: `Spring Sweater`,
    price: `$39.00`,
    descrp: `A mockneck corduroy sweater.`,
};

const product6 = {
    img: `img/t.yellow.jpg`,
    name: `Spaghetti Top`,
    price: `$19.00`,
    descrp: `>A very flattering spaghetti strap top.`,
};

function getContainerAsHtmlString(container) {
    return `<article class="box one">
                <img src="${container.img}" alt="Product Image">
                <div class="intro">
                    <h3>${container.name}</h3>
                    <span><del>$50.00</del>       <ins>${container.price}</ins></span>
                </div>
        
                <section class="deetspro1">
                    <ul>
                        <li><b>${container.descrp}</b> </li>
                        <li><input type="radio"> <span>Light Brown</span> <input type="radio">  <span> Indigo</span><input type="radio">  <span>White</span></li>
                        <li><input type="radio"> <span>M</span> <input type="radio">  <span>L</span> <input type="radio">  <span>XL</span></li>
                        <li><span><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i></span></li>
                    </ul>
                </section>
        
                <section class="final">
                    <button class="check"> Add to Bag </button>
                    <button class="fave" type="button"><i class="material-icons">favorite_border</i></button>
                    <p>${container.stock}</p>
                </section>
            </article>`;
};

document.getElementById('container').innerHTML = getContainerAsHtmlString (product1);
document.getElementById('container').innerHTML += getContainerAsHtmlString (product2);
document.getElementById('container').innerHTML += getContainerAsHtmlString (product3);
document.getElementById('container').innerHTML += getContainerAsHtmlString (product4);
document.getElementById('container').innerHTML += getContainerAsHtmlString (product5);
document.getElementById('container').innerHTML += getContainerAsHtmlString (product6);





























