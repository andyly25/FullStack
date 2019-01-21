class BinarySearchTree {
    constructor (key = null, value = null, parent = null) {
        /*
         * represents single node in tree
         * node starts with left and right ptrs to their child being null
         */
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert (key, value) {
        /*
         * used to insert an item into the tree
         * if empty, set k,v props
         *  move left or right of tree based on if value
         * is less or greater than parent's value
         * worst case is O(n) if you have to go to very bottom of tree
         * average casee is O(log(n)) if nodes insert equally left and right branches
         * aka balanced tree.
         * best case is O(1) when insert node to the left when all others to right
         */
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    get (key) {
        /*
         * check value of key against the key stored in node
         * recursively follow left or right branch
         * same runtimes of worst: O(n), avg: O(log(n)), best O(1)
         */
        if (this.key === key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.get(key);
        }
        else if (key > this.key && this.right) {
            return this.right.get(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove (key) {
        /*
         * after traveling the tree to find node for removal
         * if node has no children when remove it and references to it with
         * this,_replaceWith(null)
         *
         * if node only has left child, replace node
         * with its left child, and only right, replace with right child
         *
         * if node has both left and right child, you search node contain
         * lowest key on right branch (or highest left branch) and this node
         * acts as replacement for node you are removing and is then removed from
         * tree
         */
        if (this.key === key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith (node) {
        /*
         * if node replaced has a parent, need to fix up references from parent
         * to the replacement node, and replacement node to parent
         * same runtime as the others
         */
        if (this.parent) {
            if (this === this.parent.left) {
                this.parent.left = node;
            }
            else if (this === this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin () {
        /*
         * keep going left until you can go no further left
         * this is lowest node
         */
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}
