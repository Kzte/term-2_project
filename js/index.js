function AddToOrder(event){
    event.preventDefault();
    
    let toppings = document.querySelectorAll('.Toppings:checked');

    if (toppings.length<5){
        alert('Please select 5 Toppings')
        return;
    }

    let sauces = document.querySelectorAll('.Sauces:checked');
    if( sauces.length<1){
        alert('Please select 1 sauce')
        return;
    }

    const subName = document.getElementById('sub-name').value;
    const baseBread = document.getElementById('base-bread').value;
    
    let breadTotal = 0;

    if(baseBread == 'Multigrain Bread'){
        breadTotal += 15;
    }else if(baseBread == 'Whole Wheat Bread'){
        breadTotal += 20;
    }else if(baseBread == 'Croissant'){
        breadTotal += 25;
    }

    let selectedToppings = [];

    for(let i = 0; i < toppings.length; i++){
        selectedToppings[i] = toppings[i].value;
    }

    const toppingsPrice = 10 * selectedToppings.length;

    let selectedSauces = []
    
    for ( let i = 0; i < sauces.length; i++){
     selectedSauces[i] = sauces[i].value; 
    }

    const saucesPrice = 5 * selectedSauces.length;


    
    let sub = {
        name:subName,
        bread:baseBread,
        toppings:selectedToppings,
        sauces:selectedSauces,
        total: breadTotal + toppingsPrice + saucesPrice
    }

    let tempOrder = localStorage.getItem('order');
    if(tempOrder){
        tempOrder= JSON.parse(tempOrder);
        tempOrder.push(sub);
        localStorage.setItem('order', JSON.stringify(tempOrder));
    }else{
        localStorage.setItem('order', JSON.stringify([sub]));
    }
}