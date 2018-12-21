export function returnMoney(drinkName, money) {
    let result=0;
    if (money<=100){
        if (drinkName==='3v1'){
            return result=money-30;

        }
        if (drinkName==='blackCoffee'){
            return result=money-35;
        }
        if (drinkName==='cream'){
            return result=money-40;
        }
        if (drinkName==='latte'){
            return result=money-45;
        }

    } else return 'error';

}