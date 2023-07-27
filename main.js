const Email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const hambuergesa = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const menuCarro = document.querySelector(`.navbar-shopping-cart`);
const prodcutDetailCloseIcon = document.querySelector(`.product-detail-close`);
const shoppingCartContaner = document.querySelector(`#shoppingCartContaner`);
const cardContainer = document.querySelector(`.cards-container`);
const prodcutDetailContainer = document.querySelector(`#productDetail`);



Email.addEventListener(`click`, toggleDesktopMenu);
hambuergesa.addEventListener(`click`, togglemobileMenu);
menuCarro.addEventListener(`click`, toggleCarro);
prodcutDetailCloseIcon.addEventListener(`click`, closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContaner.classList.contains(`inactive`);

    if(!isAsideClosed){
        shoppingCartContaner.classList.add(`inactive`);
    }

    desktopMenu.classList.toggle(`inactive`)
}

function togglemobileMenu(){

    const isAsideClosed = shoppingCartContaner.classList.contains(`inactive`);

    if(!isAsideClosed){
        shoppingCartContaner.classList.add(`inactive`);
    }
    mobileMenu.classList.toggle(`inactive`)
    closeProductDetailAside();
}

function toggleCarro(){
    const ismobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isdesktopMenClosed = desktopMenu.classList.contains(`inactive`)
    if(!ismobileMenuClosed){
        mobileMenu.classList.add(`inactive`);
    }
    if(!isdesktopMenClosed){
        desktopMenu.classList.add(`inactive`)
    }

    const isProductDetailClosed = prodcutDetailContainer.classList.contains(`inactive`)

    if(!isProductDetailClosed){
       prodcutDetailContainer.classList.add(`inactive`);
    }

    shoppingCartContaner.classList.toggle(`inactive`)
}

function openProdcutDetailAside(){
    shoppingCartContaner.classList.add(`inactive`);


    prodcutDetailContainer.classList.remove(`inactive`);


}

function closeProductDetailAside(){
    prodcutDetailContainer.classList.add(`inactive`);
}

const producList = [];
producList.push({
    name: `Bici`,
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,

});

producList.push({
    name: `Moto`,
    price: 12000,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJGVxNOLO5qnZS85R1uiNPkwYFeMuyw_DbtL_n-RBDn_8gF-5P6pntzvd3Iwn-fd2bNQ&usqp=CAU`,
});

producList.push({
    name: `Auto`,
    price: 120000,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhMHermlzDe1E0pdltHpUanmUgkGt8PP4cg&usqp=CAU://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJGVxNOLO5qnZS85R1uiNPkwYFeMuyw_DbtL_n-RBDn_8gF-5P6pntzvd3Iwn-fd2bNQ&usqp=CAU`,
});

function renderProdcuts(arr){
for (product of arr){
   const productCard = document.createElement(`div`);
    productCard.classList.add(`product-card`);
    //
    const img = document.createElement(`img`);
    img.setAttribute(`src`, product.image);
    img.addEventListener(`click`, openProdcutDetailAside);

    const productInfo = document.createElement(`div`);
    productInfo.classList.add(`product-info`);

    const productInfoDiv = document.createElement(`div`);

    const productPrice= document.createElement(`p`);
    productPrice.innerText = `$` + product.price;

    const productName= document.createElement(`p`);
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement(`figure`);
    const productImgCard = document.createElement(`img`);
    productImgCard.setAttribute(`src`, `./icons/bt_add_to_cart.svg`)


    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);

}
}

renderProdcuts(producList);