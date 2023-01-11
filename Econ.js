
//I'll probably get it working in the Inspector console first, then we can get it paged later.


//Game Classes
class Resource{
    constructor(name, price, demand, priceDrift, demandDrift, amtInMarket){
        this.name = name
        this.price = price
        this.demand = demand
       
    }
    DriftPrice(){

    }
   
}
class Market{
    constructor(resources, companies, products, MinWage, PrefWage, Inflation){
        this.MinWage = 5
        this.PrefWage = 7
        this.Inflation = 0
        this.resources = {}
        this.companies = {}
    }
}

class Company{
    constructor(name, worth, buildings, employees, expenses){
        this.name = name
        this.worth = 100
        this.buildings = {}
        this.employees = 5
        this.expenses = 0
        
    }
}
class Building{
    constructor(name, cost, resource, EmployeeMin, EmployeeMax, conditions){
        this.name = name
        this.cost = cost
        this.resource = resource
        this.EmployeeMin = EmployeeMin
        this.EmployeeMax = EmployeeMax
        this.conditions = conditions
    }
}
//HTML Classes
class Menu{
    constructor(elements, isOn){
        this.elements = elements
        this.isOn = false
    }

}

