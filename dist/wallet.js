function deposite_money()
{
    var add = parseInt(document.getElementById('Diposite').value); // Getting the value from input field
    
    if (add<0 || document.getElementById('Diposite').value.trim() == '')
    { 
        document.getElementById('Diposite').value = '';

        // show alert
        alert('Please enter Right from of number.');
        return;
    }
     
    // new total ammount  of diposite
    var total_diposite = parseInt(document.getElementById('total-deposite').innerText);
    total_diposite += add; 
    document.getElementById('total-deposite').innerText = total_diposite;
    document.getElementById('Diposite').value = '';


    // new total ammount  of bank account
    var current_amount = parseInt(document.getElementById('current-ammount').innerText);
    current_amount += add;
    document.getElementById('current-ammount').innerText = current_amount;
    
}   

function withdraw_money(){
    var lost = parseInt(document.getElementById('withdraw').value); 

    if (lost<0 || document.getElementById('withdraw').value.trim() == '')
    {  
        document.getElementById('withdraw').value = '';
        alert('Please enter right form of the number.');
        return;
    }

    var amount = parseInt(document.getElementById('current-ammount').innerText);

    var Withdraw = parseInt(document.getElementById('totalwithdraw').innerText);
    if(lost > amount)
    {
            alert('You can not withdraw.')
            document.getElementById('withdraw').value = '';
    }
    //   dkfjkdjfjglfdjgllfdg
    else 
    {
        amount -= lost; 
        Withdraw += lost;
        document.getElementById('withdraw').value = ''; 
     }
    
    document.getElementById('current-ammount').innerText = amount;
    document.getElementById('totalwithdraw').innerText = Withdraw;

}
 