let printMe = someval => {
  console.log('this',this)
  console.log('someval',someval)
  console.log('other args:')
  let args = [...arguments];
  foreach (arg in args) {
    console.log(arg)
  }
}

printMe("Vikram", "patil")