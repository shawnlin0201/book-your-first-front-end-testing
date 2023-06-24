export class Cat {
  constructor(name) {
    this.name = name
  }
  meow = function (content) {
    return content
  }
  hungry = function () {
    this.meow('喵喵喵') // 執行 hungry 時會連帶執行 meow 方法
  }
}