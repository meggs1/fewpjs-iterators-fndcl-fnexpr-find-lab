const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
function superbowlWin(record) {
    const foundRecord = record.find( w => { return w.result === "W"})
    if (foundRecord){
        return foundRecord.year
    }
}