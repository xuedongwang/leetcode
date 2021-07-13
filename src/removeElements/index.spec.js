
const removeElements = require('./index');

const link1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
}

const link1Result = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 5,
        next: {
          val: 6,
          next: null
        }
      }
    }
  }
}

test(`removeElements(link1, 2) return link1Result`, () => {
  expect(removeElements(link1, 2)).toEqual(link1Result);
});

