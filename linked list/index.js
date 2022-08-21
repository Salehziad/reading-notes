class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.head === null
            ? true
            : false;
    }
    append(data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
            this.size++;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next; //to loop until reach the tail
            }
            current.next = node;
            this.size++;
        }
    }
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
          return 'out of size';
        }
        // if firs index
        if (index === 0) {
          this.head = new Node(data, this.head);
          return;
        }
        const node = new Node(data);
        let current, previous;
    
        //set current to first
        current = this.head;
        let count = 0;
        while (count < index) {
          previous = current; // node before index
          count++;
          current = current.next; // node after index
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    getByIndex(index) {
        let current = this.head;
        let count = 0;
        if (index > this.size | index < 1) {
            return 'expextion'
        }
        while (current) {
            count++;
            if (count === index) {
                return current.data
            }
            current = current.next;
        }
    }
    getByData(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                console.log(current);
            }
            current = current.next;
        }
    }
    removeAtt(index) {
        if (index > 0 && index > this.size) {
          return 'out of size';
        }
        let current = this.head;
        let previous;
        let count = 0;
        // remove first
        if (index === 0) {
          this.head = this.next;
        } else {
          while (count < index) {
            count++;
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }
        this.size--;
    }
    reverse() {
        let current = this.head;
        let prev = null;
        let nexT = null;
        while (current) {
            // console.log('1',current.next);
            nexT = current.next; //save the next node inside next
            // console.log('2',nexT);
            current.next = prev; // after save inside next make it null(null)
            // console.log('3',prev);
            prev = current; //save current node to prev
            // console.log('4',prev);
            current = nexT; //move current to next
            // console.log('2',current); nexT=null
        }
        console.log(prev)
    }
    middleList() {
        let mid = Math.floor(this.size / 2);
        let current = this.head;
        let count = 0;
        while (current) {
            if (mid === count) {
                console.log(current.data);
                return current;
            }
            current = current.next;
            count++;
        }
        console.log(mid)
    }
    deleteMiddle() {
        let mid = Math.floor(this.size / 2);
        let current = this.head;
        let count = 0;
        while (current) {
            if (mid === count) {
                current.data = current.next.data;
                current.next = current.next.next;
            }
            current = current.next;
            count++;
        }
    }
    removeDublicate() {
        let current = this.head;
        while (current && current.next) {
            console.log(current.data);
            if (current.data == current.next.data) {
                current.next = current.next.next;
            }
                current = current.next;
            
        }
        return this.head
    }
    findFromEnd(index) {
        let current = this.head;
        let count = 0;
        let node = this.size - index;
        // console.log(node);
        while (current) {
            if (count === node) {
                console.log(current);
            }
            count++;
            current = current.next;
        }
    }
    isPlandemore() {
        let current = this.head;
        let arr = [];
        while (current) { 
            arr.push(current.data)
            current = current.next;
        }
        // let reversed =arr
        console.log(arr);
        function palindrome(arr) {
            let n=arr.length
            let flag = true;
            for (let i = 0; i <= n / 2 && n != 0; i++) {
                if (arr[i] != arr[n - i - 1]) {
                    flag = false;
                    break;
                }
            }
            console.log(flag)
        }
        palindrome(arr)
    }
    zipList(head1, head2) {
        let tail = head1.head;
        let current1 = head1.head.next;
        let current2 = head2.head;
        let count = 0;
        while (current1 && current2) {
          if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
          } else {
            tail.next = current1;
            current1 = current1.next;
          }
          tail = tail.next;
          count++;
        }
        if (current1) tail.next = current1;
        if (current2) tail.next = current2;
        return head1;
    }
    print() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr)
    }
}

let list = new LinkedList();
list.append(1)
list.append(2)
list.append(1)
// list.append(2)
// list.append(3)
// list.append(1)
// list.findFromEnd(2)/
// list.append(4)
// list.append(3)
// list.isPlandemore()
// console.log(list.removeDublicate(list))
// console.log(list.insertAt(10,3))
// list.zipList(list,list)
// list.removeAtt(6)
list.print()
// list.getByData(2) console.log(list.getByIndex(4))