class AbstractHuman {
    constructor(growth, weight, date, floor, name, disability) {
  this.growth = growth;
  this.weight = weight;
  this.date = date;
  this.floor = floor;
  this.name = name;
  this.disability = disability
    }
    get getInfo(){
        const information = {
            growth:this.growth,
            weight:this.weight,
            data:this.date,
            floor:this.floor,
            name:this.name,
            disability:this.disability
        }
        console.log(information)
    }
    set getNewDisability(disability) {
        this.disability = disability;
    }

}
const firstHuman = new AbstractHuman('184','82', new Date('1995-05-09'), 'female',
    'Anya', 'mid')
firstHuman.getInfo
firstHuman.getNewDisability
firstHuman.getInfo
console.log(firstHuman, 'firstHuman')
firstHuman.name = 'Привет, Была Аня, стала Оля'

