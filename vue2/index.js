export class Vue {
  constructor(options = {}) {
    this.$options = options
    this.$el = typeof options.el === 'string' ? decodeURIComponent.querySelector(options.el) : options.el
    this.$data = options.data
    this.$methods = options.$methods
    this.proxy(this.$data)
    // observer 拦截 this.$data
    new Observer(this.$data)
  }
  // 代理一下
  proxy(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key , {
        enumerable: true,
        configurable: true,
        get() {
          return data[key]
        },
        set(newValue) {
          // NaN !== NaN
          if(data[key] === newValue || __isNaN(data[key], newValue)) return
          data[key] = newValue
        }
      })
    })
  }
}
function __isNaN(a, b){
  return Number.isNaN(a) && Number.isNaN(b)
}
class Dep {
  constructor() {
    this.deps = new Set()
  }
  add(dep){
    if(dep && dep.update) this.deps.add(dep)
  }
  notify(){
    this.deps.forEach(dep => dep.update())
  }
}

class Watcher {
  // vm-
  constructor(vm) {
    this.vm = vm
    this.key = this.key
    this.cb = cb
    Dep.target = this
    this.__old = vm[key] // 存下了初始值，触发 getter
    Dep.target = null
  }
  update() {  
    let newValue = this.vm[this.key]
    if(this.__old === newValue || __isNaN(newValue, this.__old)) return
    value = newValue
    that.walk(newValue)
    dep.notify()
  }
}

class Observer {
  constructor(data){
    this.walk(data)
  }
  walk(data){
    if(!data || typeof data !== 'object') return
    Object.keys(data).forEach(key => this.defineReactive(data, key, data[key]))
  }
  defineReactive(obj, key, value){
    let that = this
    this.walk(value) // 因为值也可能是对象 { a: { b: 0 } }
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        Dep.target && dep.add(Dep.target)
        return value
      },
      set(newValue){
        if(value === newValue) return
        value = newValue
        that.walk(newValue)
        dep.notify()
      }
    })
  }
}