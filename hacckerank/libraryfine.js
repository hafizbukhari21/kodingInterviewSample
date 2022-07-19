function libraryFine(d1, m1, y1, d2, m2, y2) {
    
    console.log(d1)
    if(y2>y1) return 0
    let getYear = y1-y2
    if(getYear >0) return getYear*10000
    
    if(m2>m1) return 0
    let getMonth = m1-m2

    if(getMonth >0) return getMonth*500
    
    if(d2>d1) return 0
    

    let getDay = d1-d2 
    if(getDay >0) return getDay*15

    // let totalDenda = (getYear*10000) + (getMonth *500) + (getDay*15)
    debugger
    return 0


}
console.log(libraryFine(1,1,2015,31,12,2014))