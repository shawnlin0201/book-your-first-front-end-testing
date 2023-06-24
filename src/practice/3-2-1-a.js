/* 貓咪乾乾自動存提服務 */
export class FoodBank {
  constructor() {
    this.safe = {}
  }

  openAccount(name) {
    if (this.safe[name]) return '您已開過戶頭囉。'
    this.safe[name] = { food: 0 }
    return `開戶完成。`
  }

  deposit(name, food) {
    if (!this.safe[name]) return '查詢不到該用戶，請重新確認。'
    this.safe[name].food += food
    return `存款完成，戶頭目前餘額 ${this.safe[name].food}`
  }

  withdraw(name, food) {
    if (!this.safe[name]) return '查詢不到該用戶，請重新確認。'

    if (this.safe[name].food >= food) {
      this.safe[name].food -= food
      return `存款完成，戶頭目前餘額 ${this.safe[name].food}`
    } else {
      return `餘額不足，你帳戶目前餘額為 ${this.safe[name].food}`
    }
  }
}