
const deleteNode = require('./index');

const tree = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

const result = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null
      }
    }
  }
};

const node = tree.next.next;

test(`delete ${node.val} node`, () => {
  deleteNode(node);
  expect(tree).toEqual(result);
});


