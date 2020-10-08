let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '1%' };

function NewDict(item){

    let price = parseInt(item['price']);
    let discount = parseInt(item['discount']);

    if (isNaN(discount)){
        return price;
    }
    else if(!isNaN(price) && !isNaN(discount)){
        let priceWithDiscount = price - (price * (discount / 100));
        item['priceWithDiscount'] = priceWithDiscount.toString()+'$';
        return priceWithDiscount;
    }
    else{
        return NaN;
    }
}

console.log(NewDict(item))