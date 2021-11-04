function twoSums(numbs, target) {
    const store = {}

    for (let i = 0; i < numbs.length; i++) {
        if (store[ target - (numbs[i]) ] !== undefined ) {
            return [store[target - numbs[i]], i ]
        }else{
            store[numbs[i]] = i
        }
    }
    console.log(store)

}

module.exports = twoSums;