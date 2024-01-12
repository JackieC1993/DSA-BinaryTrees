const { inspect } = require('util')

class TreeNode {
    constructor(val = null){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor(root = null){
        this.root = root
    }

    insert(value){
        const newNode = new TreeNode(value)
        // if there is no root node, assign the newNode to be the root
        if(!this.root){
            this.root = newNode
        } else {
            this.recursiveInsert(this.root, newNode)
        }
    }

    recursiveInsert(node, newNode){
        // compare node's value to newNode's value
        if(newNode.val < node.val){
            // if there is no node.left, assign newNode to be node.left
            if(!node.left){
                node.left = newNode
            } else {
                // Keep traversing to find a home for the newNode
                this.recursiveInsert(node.left, newNode)
            }
        } else {
            // if there is no node.right, assign newNode to be node.right
            if(!node.right){
                node.right = newNode
            } else {
                // Keep traversing to find a home for the newNode
                this.recursiveInsert(node.right, newNode)
            }
        }
    }

    // Return the node w the given value
    search(value){
        return this.recursiveSearch(this.root, value)
    }

    // Writing a separate method so we can pass ANY node to it, not just the root
    recursiveSearch(node, value){
        // if we don't have a root node..?
        if(!node) return null
        else if(node.val === value){
            // node's val is equal to the value
            // return that node
            return node
        } else if(value < node.val){
            // if value is less than the node.val
            return this.recursiveSearch(node.left, value)
        } else {
            return this.recursiveSearch(node.right, value)
        }
    }

    // addValues(){} -- breadth first, depth first, recursively
    // Add up all the vals for each node and return the total
    addVals1(){
        // Breadth First
        // Initialize a total var at 0
        let total = 0
        const queue = []
        queue.push(this.root)

        // Iterate over the queue while the queue has nodes in it
        while(queue.length){
            // take the first element in the queue out of the queue and look at it
            const node = queue.shift()
            // if the element is a node, then add its val to the total
            if(node !== null){
                total += node.val
                // then check if it has a left point and a right pointer and add them to the queue
                if(node.left !== null){
                    queue.push(node.left)
                }
                if(node.right !== null){
                    queue.push(node.right)
                }
            }
            // console.log("Total at this iteration:", total)
            // console.log("Queue at this iteration:" , queue)
        }
        return total
    }

    addVals2(){
        // Initialize a total var to 0
        let total = 0
        const stack = []
        
        // numStack is for visual purposes(comment in lines 104, 110 && 123 to see)
        // const numStack = []
        stack.push(this.root)
        while(stack.length){
            // Take off the LAST element in the stack and save it to a var
            // []
            const node = stack.pop()
            const num = node.val
            // If the element is a node, add its val to the total
            if(node !== null){
                total += node.val
                // numStack.push(num)
                if(node.right !== null){
                    stack.push(node.right)
                }
                if(node.left !== null){
                    stack.push(node.left)
                }
                // console.log("Total at this iteration:", total)
                // console.log("Queue at this iteration:" , stack)
                // console.log(numStack)
            }
        }
        return total
    }

    // Adding all the vals recursively
    addVals3(node = this.root){
        if(node === null) return 0
        let total = node.val
        return total + this.addVals3(node.left) + this.addVals3(node.right) 
    }
}
//        5
//       / \
//      3   7
//     / \   \
//    1   4   9
//     \
//      2
const tree = new BinaryTree()
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(1)
tree.insert(4)
tree.insert(9)
tree.insert(2)
tree.insert(11)

// console.log(inspect(tree, true, 10))

// console.log(tree.search(1))
console.log(tree.addVals1())
console.log(tree.addVals2())
console.log(tree.addVals3())