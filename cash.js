document.write("<h2>Hello World</h2>");


var el = getElementById("eggs");
el.addEventListener




function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Mihai", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,

    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
            case "eggs": 
                this.add(0.98 * quantity); 
                document.write("eggs * " + quantity + "=" + this.add.val);
                break;
            case "milk": 
                this.add(1.23 * quantity); 
                document.write(this.add.val());
                               break;
                               case "magazine": this.add(4.99 * quantity); break;
            case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    applyStaffDiscount: function(employee) {
        this.total -= this.total * (employee.discountPercent / 100);
    }     
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
