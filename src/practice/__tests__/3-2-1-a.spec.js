// import { FoodBank } from '../3-2-1-a'

describe.todo('開戶', () => {
  let bank
  beforeEach(() => {
    // Try it!
  })
  it(`開戶完成，Safe 物件中應有用戶資訊' `, () => {
    const expected = { Orange: { food: 0 } }
    let userInfo = bank.safe

    bank.openAccount('Orange')

    expect(userInfo).toEqual(expected)
  })
  it(`開戶完成，應該回應 '開戶完成。' `, () => {
    let expected = '開戶完成。'
    let message

    message = bank.openAccount('Orange')
    expect(message).toBe(expected)
  })
  it(`若開過戶頭，應該回應 '您已開過戶頭囉。' `, () => {
    let expected = '您已開過戶頭囉。'
    let message

    message = bank.openAccount('Orange')
    message = bank.openAccount('Orange')

    expect(message).toBe(expected)
  })
})
