
/**
 * @ref: https://leetcode-cn.com/problems/delete-middle-node-lcci/
 */
// a->b->c->d->e->f中的节点c
const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
}
module.exports = deleteNode;
