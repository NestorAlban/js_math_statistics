const btn = document.querySelector('#calcular');
const btn2 = document.querySelector('#calcularCoupon');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const inputPriceC = document.querySelector('#price1');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');
const pResult1 = document.querySelector('#result1');


btn.addEventListener('click', calcularPrecioDescuento);
btn2.addEventListener('click', calcularPrecioDescuentoCoupon);


function calcularPrecioDescuento(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    const newPrice = price * ((100-discount)/100);
    console.log({price,discount,newPrice})

    if(price==0 || !price){
        pResult.innerText = 'Por favor, ingresar el precio del producto'
    } else if (!discount){
        pResult.innerText = 'Por favor, ingresar el descuento del producto'
    } else if (discount>=100){
        pResult.innerText = 'Por favor, ingresar el descuento correcto'
    } else{
        pResult.innerText = `El precio con descuento aplicado es $${newPrice}`;
    }
}

function calcularPrecioDescuentoCoupon(){
    const price = Number(inputPriceC.value);
    const coupon = inputCoupon.value;



    //Método de diccionario
    const coupon_dict = {
        'Cupon1': 15,
        'Cupon2': 05,
        'Cupon3': 35,
        'Cupon4': 10,
    }
    const coupon_valid = coupon_dict.hasOwnProperty(coupon)
    // Object.keys(diccionario).includes("2")
    console.log(coupon_dict[coupon])
    if(price==0 || !price){
        pResult1.innerText = 'Por favor, ingresar el precio del producto'
    } else if (!discount){
        pResult1.innerText = 'Por favor, ingresar el cupón de descuento'
    } else if (!coupon_valid){
        pResult1.innerText = 'Por favor, ingresar el valida el cupón'
    } else{
        const coupon_value = coupon_dict[coupon]
        const newPrice = price * ((100-coupon_value)/100);
        console.log({price,coupon_value,newPrice})
        pResult1.innerText = `El precio con descuento aplicado es $${newPrice}`;
    }

    //Método de array filter

    const coupon_list = [];
    coupon_list.push({
        name: 'Cupon1',
        coupon_disc: 15,
    });
    coupon_list.push({
        name: 'Cupon2',
        coupon_disc: 05,
    });
    coupon_list.push({
        name: 'Cupon3',
        coupon_disc: 35,
    });
    coupon_list.push({
        name: 'Cupon4',
        coupon_disc: 10,
    });

    function find_discount(couponElement){
        return couponElement.name == coupon;
    }
    
    const coupon_array_value = coupon_list.filter(find_discount);
    console.log('---------------',coupon_array_value)

    if(price==0 || !price){
        pResult1.innerText = 'Por favor, ingresar el precio del producto'
    } else if (!discount){
        pResult1.innerText = 'Por favor, ingresar el cupón de descuento'
    } else if (coupon_array_value.length == 0){
        pResult1.innerText = 'Por favor, ingresar el valida el cupón'
    } else{
        const coupon_value2 = coupon_array_value[0].coupon_disc
        const newPrice = price * ((100-coupon_value2)/100);
        console.log({price,coupon_value2,newPrice})
        pResult1.innerText = `El precio con descuento aplicado es $${newPrice}`;
    }

    //Método de array find
    const coupon_array_value2 = coupon_list.find(find_discount);
    console.log('---------------2',coupon_array_value2)

    if(price==0 || !price){
        pResult1.innerText = 'Por favor, ingresar el precio del producto'
    } else if (!discount){
        pResult1.innerText = 'Por favor, ingresar el cupón de descuento'
    } else if (!coupon_array_value2){
        pResult1.innerText = 'Por favor, ingresar el valida el cupón'
    } else{
        const coupon_value2 = coupon_array_value2.coupon_disc
        const newPrice = price * ((100-coupon_value2)/100);
        console.log({price,coupon_value2,newPrice})
        pResult1.innerText = `El precio con descuento aplicado es $${newPrice}`;
    }

}




