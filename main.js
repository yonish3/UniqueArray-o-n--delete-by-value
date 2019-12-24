class UniqueArray {
    constructor(item){
        this.items = []
        this.length = 0
    }

    add(item){
        if (!this[item] && this[item]!=0) {
            this[item]=this.length
            this.items[this.length] = item
            this.length++
        }else{
            console.log(item + ' already exist')
        }
    }

    showAll(){
        this.items.forEach(item => {
            console.log(item)
        });
    }
    exists(item){
        if (this[item]) {
            return true
        }else{
        return false   
        }
    }


    get(index){
        if (this.items[index]) {
            return this.items[index]
        }

        return -1
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
