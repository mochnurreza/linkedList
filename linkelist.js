class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkList{
    constructor(head = null, size = 0){
        this.head = head
        this.size = size
    }

    insertHead(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    printList(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }

    insertLastData(data){
        let node = new Node(data)
        let current;
        // check if there's no head
        if(!this.head){
            this.head = node
        } else {
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insertIndex(data, index){
        if(index > 0 && index > this.next){
            return
        }
        // if first index
        if(index == 0){
            this.head = new Node(data, this.head)
            return
        }
        let newNode = new Node(data)
        let current;let previous;
        current = this.head
        let count = 0 
        while(count < index){
            previous = current
            count++
            current = current.next
        }
        newNode.next = current
        previous.next = newNode
        this.size++
    }

    getAt(index){
        let current = this.head
        let count = 0
        while(current){
            if(count == index){
                console.log(current.data)
            }
            count++
            current = current.next
        }

        return null
    }

    removeAt(index){
        // check if out of range
        if(index > 0 && index > this.next){
            return
        }
        let current = this.head
        let previous;
        let count = 0
        // remove first index
        if(index == 0){
            this.head = current.next
        } else {
            while(count < index){
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
    }

    clearList(){
        this.head = null
        this.size = 0
    }
}

const link = new LinkList()
link.insertHead(100)
link.insertLastData(200)
link.insertIndex(400,2)
link.insertIndex(500,1)
// link.getAt(2)
link.removeAt(2)
link.printList()

