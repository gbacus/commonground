const handleData = (people, demographic, voteVal) => {
  let dataObj = {}
  var dataArr = [];
  people.forEach(person => {
    if(!dataObj.hasOwnProperty(person[demographic]) && person.input === voteVal) {
      dataObj[person[demographic]] = 1;
    } else if(person.input === voteVal) {
      dataObj[person[demographic]] += 1;
    }
  })
  for(let demo in dataObj) {
    let tuple = []
    tuple[0] = parseInt(demo)
    tuple[1] = dataObj[demo]
    dataArr.push(tuple)
  }
  return dataArr
}

export default handleData