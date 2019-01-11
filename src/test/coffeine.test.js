import {returnMoney} from "../js/coffeine";

test ('it should calculate cash', ()=>{
    const result = returnMoney('blackCoffee', 80);
    expect(result).toBe(45);
})