class Bank{
setBank(accno,name,mobile_no,balance,amount){
    this.accno=accno
    this.name=name
    this.mobile_no=mobile_no
    this.balance=balance
    console.log(`account created`)
}
creditAcc(creditamount){
    console.log(`an amount of ${creditamount}  has been credited to your account`)
    this.balance+=creditamount
}
debitAcc(debitamount){
    console.log(`an amount of ${debitamount}  has been debited to your account`)
    this.balance-=debitamount

}
balanceAcc(){
    console.log(`balance=${this.balance}`)
}
}
const bank=new Bank
bank.setBank(987655467,"rafna",8281605411,5000)
bank.creditAcc(2000)
bank.debitAcc(1000)
bank.balanceAcc()