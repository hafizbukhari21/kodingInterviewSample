

function sockMerchant(n, arrs) {
    let match=0
    let temp = new Map()
    for(let i=0;i<arrs.length;i++){
        if(temp.get(arrs[i])) {
            
            match++
            temp.set(arrs[i],temp.get(arrs[i])-1)
        }
        else{
            
            temp.set(arrs[i],1)
        }
        
        
    }
    
    return match

}

let arr = [10,20,20,10,10,30,50,10,20]

console.log(sockMerchant(10,arr))


