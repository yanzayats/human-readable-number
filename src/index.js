module.exports = function toReadable (number) {
    let a = ['zero','one','two','three','four','five','six','seven','eight','nine']
    let b = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let c = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
      let d = number.toString()[1]
      let e = (number.toString()[0])-2
      let f = number.toString()[2]
    if (number < 10) {
        return a[number]
    } else if (number < 20) {
        return b[d]
    } else if (number < 100 && d ==='0' ) {
        return c[e]
    } else if (number < 100 && d !=='0' ) {
      return `${c[e]} ${a[d]}`
    } else if (number < 1000 && f ==='0' && d ==='0') {
      return `${a[number.toString()[0]]} hundred`
    } else if (number < 1000 && f !=='0' && d ==='0') {
      return `${a[number.toString()[0]]} hundred ${a[f]}`
    } else if (number < 1000 && d ==='1') {
       return `${a[number.toString()[0]]} hundred ${b[f]}`
    } else if (number < 1000 && d !=='0' && f ==='0') {
      return `${a[number.toString()[0]]} hundred ${c[(number.toString()[1])-2]}`
    } else {
      return `${a[number.toString()[0]]} hundred ${c[(number.toString()[1])-2]} ${a[f]}`
    }
    }
