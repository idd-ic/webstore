const container = [
    {
        img: `img/d.black.jpg`,
        name: `That Dress Tho`,
        regprice: `59.00`,
        price: `39.00`,
        descrp: `Very comfy sleeveless corduroy dress`,
        stock: `Snag the last one!`
    },{
        img: `img/o.brown.jpg`,
        name: `Modern Jacket`,
        regprice: `89.00`,
        price: `69.00`,
        descrp: `Perfect for spring and layering during winter`,
        stock: `Hurry! 10 stocks left!`
    },{
        img: `img/p.pink.jpg`,
        name: `Mean Girl Pants`,
        regprice: `159.00`,
        price: `129.00`,
        descrp: `A very beautiful flare corduroy pants.`,
        stock: `Hurry! 15 stocks left!`
    },{
        img: `img/s.grey.jpg`,
        name: `Where'd You Get That Skirt`,
        regprice: `59.00`,
        price: `49.00`,
        descrp: `A chic vintage-inspired skirt`,
        stock: `LAST CHANCE!`
    },{
        img: `img/sw.turquoise.jpg`,
        name: `Spring Sweater`,
        regprice: `49.00`,
        price: `39.00`,
        descrp: `A mockneck corduroy sweater.`,
        stock: `Snag the last one!`
    },{
        img: `img/t.yellow.jpg`,
        name: `Spaghetti Top`,
        regprice: `49.00`,
        price: `19.00`,
        descrp: `A very flattering spaghetti strap top.`,
        stock: `Hurry! Low on stocks!`
    },{
        img: `img/d.cblock.jpg`,
        name: `Color block dress`,
        regprice: `99.00`,
        price: `79.00`,
        descrp: `An interestingly designed dress.`, 
        stock: `Hurry! 10 stocks left!`
    },{
        img: `img/p.cigarette.jpg`,
        name: `Cigarette Cropped Pants`,
        regprice: `89.00`,
        price: `59.00`,
        descrp: `This'll fit well if you're over 5ft tall.`,
        stock: `LAST CHANCE!`
    },{
        img: `img/p.cropped.jpg`,
        name: `Cropped Skinny Pants`,
        regprice: `79.00`,
        price: `49.00`,
        descrp: `Perfect for those ankles!`,
        stock: `LAST CHANCE!`
    },{
        img: `img/d.peplum.jpg`,
        name: `Fuchsia Peplum Dress`,
        regprice: `199.00`,
        price: `159.00`,
        descrp: `To when she's feeling a bit conservative.`,
        stock: `LAST CHANCE!`
    },{
        img: `img/d.aline.jpg`,
        name: `Very cute a-line buttoned dress.`,
        regprice: `129.00`,
        price: `99.00`,
        descrp: `Not too short but critical when it winds.`,
        stock: `LAST CHANCE!`
    },{
        img: `img/o.db.jpg`,
        name: `A dark brown modern jacket.`,
        regprice: `89.00`,
        price: `69.00`,
        descrp: `Perfect for spring and layering during winter.`,
        stock: `LAST CHANCE!`
    },{
        img: `img/d.orange.jpg`,
        name: `That Dress Tho`,
        regprice: `59.00`,
        price: `39.00`,
        descrp: `Very comfy sleeveless corduroy dress.`,
        stock: `LAST CHANCE!` 
    },{
        img: `img/d.shaper.jpg`,
        name: `That Dress Tho`,
        regprice: `159.00`,
        price: `139.00`,
        descrp: `To when she's feeling slightly conservative.`,
        stock: `LAST CHANCE!`
    },{
        img: `img/p.taupe.jpg`,
        name: `Mean Girl Pants`,
        regprice: `159.00`,
        price: `129.00`,
        descrp: `A very beautiful flare corduroy pants.`,
        stock: `LAST CHANCE!`
    },{
        img: `img/t.black.jpg`,
        name: `Spaghetti Top`,
        regprice: `49.00`,
        price: `19.00`,
        descrp: `A very flattering spaghetti strap top.`,
        stock: `Hurry! Low on stocks!`
    },{
        img: `img/t.buckle.jpg`,
        name: `Moss green buckle strap top!`,
        regprice: `59.00`,
        price: `29.00`,
        descrp: `Perfect when you're trying to be cool like Lara Croft. `,
        stock: `Hurry! Low on stocks!`
    },{
        img: `img/p.green.jpg`,
        name: `Mean Girl Pants`,
        regprice: `159.00`,
        price: `129.00`,
        descrp: `A very beautiful flare corduroy pants.`,
        stock: `Hurry! Low on stocks!`
    },{
        img: `img/p.straight.jpg`,
        name: `The corporate straight-cut corduroy pants.`,
        regprice: `229.00`,
        price: `189.00`,
        descrp: `Fool people and look professional with this pants!`,
        stock: `Hurry! Low on stocks!`
    },{
        // img: `img/s.redb.jpg`,
        //     name: `Where'd You Get That Skirt with Buckle Edition`,
        //     regprice: `89.00`,
        //     price: `69.00`,
        //     descrp: `This could have been a partner of the buckle top if this wasn't red.`,
        //     stock: `LAST CHANCE!
    }
]

/// If the cost is less than $50, tell the user this is a LAST CHANCE

function getContainerAsHtmlString(container) {
    return `<article class="box one">
                <img src="${container.img}" alt="Product Image">
                <div class="intro">
                    <h3><strong>${container.name}</strong></h3>
                    <small>${container.descrp}</small>
                    
                </div>
        
                <section class="deetspro1">
                    <ul>
                        <li><input type="radio"> <span>XS</span><input type="radio"> <span>S</span> <input type="radio"> <span>M</span> <input type="radio">  <span>L</span> <input type="radio">  <span>XL</span></li>
                        <li><span><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i></span></li>
                        <li><span><del>$${container.regprice}</del>       <ins>$${container.price}</ins></span></li>
                        <li><small>${container.stock}</small></li>
                    </ul>
                </section>
        
                <section class="final">
                    <button class="check"> Add to Bag </button>
                    <a href="#"><button><i class="material-icons">favorite_border</i></button></a>
            </article>`;
};

function renderContainer(arr){
    const arrOfContainer = container.map(getContainerAsHtmlString)
    const strOfHtmlContainer = arrOfContainer.join('\n');
    document.getElementById('container').innerHTML = strOfHtmlContainer;
}

renderContainer (container);



// document.getElementById('container').innerHTML = getContainerAsHtmlString (product1);
// document.getElementById('container').innerHTML += getContainerAsHtmlString (product2);
// document.getElementById('container').innerHTML += getContainerAsHtmlString (product3);
// document.getElementById('container').innerHTML += getContainerAsHtmlString (product4);
// document.getElementById('container').innerHTML += getContainerAsHtmlString (product5);
// document.getElementById('container').innerHTML += getContainerAsHtmlString (product6);





























