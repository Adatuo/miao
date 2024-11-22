function factory2(num) {
  let factors = []
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i)
      /**多次因数：例如，对于 60，我们首先找到 2，然后 60 除以 2 得到 30。此时我们希望再次检查 2 是否仍然是 30 的因数。
          更新因数：如果我们不执行 i--，下次循环时 i 将增加到 3，而我们将错过再次检查 2 是否是新的 num 的因数。 */
      num = num / i 
    }
    if (num == 1) {
      break //退出2循环
    }
  }
  return factors
}

console.log(factory2(process.argv[2]).join(" "));

