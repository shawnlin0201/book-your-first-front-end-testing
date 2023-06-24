const history = []

describe.skip('如果想查看資訊請將 skip 清除', () => {

  beforeAll(() => {
    history.push('beforeAll - 父層情境')
  })
  beforeEach(() => {
    history.push('beforeEach - 父層情境')
  })
  afterAll(() => {
    history.push('afterAll - 父層情境')
    console.log(history)
  })
  afterEach(() => {
    history.push('afterEach - 父層情境')
  })
  describe('子層情境 A', () => {
    beforeAll(() => {
      history.push('beforeAll - 子層情境 A')
    })
    beforeEach(() => {
      history.push('beforeEach - 子層情境 A')
    })
    afterAll(() => {
      history.push('afterAll - 子層情境 A')
    })
    afterEach(() => {
      history.push('afterEach - 子層情境 A')
    })
    it('案例 1', () => {
      history.push('子層情境 A 案例 1')
    })
    it('案例 2', () => {
      history.push('子層情境 A 案例 2')
    })
  })
  describe('子層情境 B', () => {
    beforeAll(() => {
      history.push('beforeAll - 子層情境 B')
    })
    beforeEach(() => {
      history.push('beforeEach - 子層情境 B')
    })
    afterAll(() => {
      history.push('afterAll - 子層情境 B')
    })
    afterEach(() => {
      history.push('afterEach - 子層情境 B')
    })
    it('案例 1', () => {
      history.push('子層情境 B 案例 1')
    })
    it('案例 2', () => {
      history.push('子層情境 B 案例 2')
    })
  })
})
  