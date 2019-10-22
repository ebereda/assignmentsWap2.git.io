/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var accountInfoList = [];



var account = (function(){
    'use strict';
    
  
    var _account_name;
    var _deposited_amount;
    
    function setAccountInfo(acc,dep){
        _account_name = acc;
        _deposited_amount = dep;
    }
    function account(){
       
        var acc = Account(_account_name,_deposited_amount);
        accountInfoList.push(acc);
        
    }
    return {
        createAccount: function(acc,dep){
            setAccountInfo(acc,dep);
             account();
           
        }
    };
})();

function onCreateAccount(){
    var accountName = document.getElementById("acc_name").value;
    var depositeAmount = document.getElementById("deposite").value;
   
    
    account.createAccount(accountName,depositeAmount);
    display();
}
function clear_fields(){
   
    accountInfoList=[];
    document.getElementById("result").value ="";
    document.getElementById("acc_name").value = "";
    document.getElementById("deposite").value="";
}
function display(){
    accountInfoList.clear;
    document.getElementById("result").value ="";
    for(var i=0;i<accountInfoList.length;i++){
        document.getElementById("result").value += accountInfoList[i].name + ":" + accountInfoList[i].amount + "\n";
    }
}
function Account(acc_name, dep_amount){
    return {
        name: acc_name,
        amount: dep_amount
    }
    
};

