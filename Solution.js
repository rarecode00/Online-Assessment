function apartmentHunting(blocks , reqs) {
    // it Stores the index of best apartmentHunting
    let index = -1;
    // it contains obj having the properties of reqs as false
    let needs = {}
    // farthest distance traveled
    let farthest = blocks.length;
    // making needs object 
    for(let i = 0; i < reqs.length; i++){
        needs[reqs[i]] = false
    }

    // Traversing through blocks 
    for(var i = 0; i < blocks.length; i++){
        // make a copy of needs
          let curr = {...needs};
       // assinging the properties of current block
          for(let k in curr){
             curr[k] = curr[k] || blocks[i][k]
          }
       // taking left valid blocks and right valid blocks
          let left = i - 1 , right = i + 1;
       // distace covered for the currenct block
          let fartherestHere = 0;
       // traversing through left and right till valid
          while(left >= 0 || right < blocks.length){
                fartherestHere++;
                if(left >= 0){
                    for(let k in curr){
                        // if any properties is true then it should be true
                         curr[k] = (curr[k] || blocks[left][k] ? true : false);
                    }
                    left--;
                }

                if(right < blocks.length){
                    for(let k in curr){
                         curr[k] = (curr[k] || blocks[right][k] ? true : false);
                    }
                    right++;
                }

                // checking whether all the required properties are filled are not 
                let ok = true;
                for(let k in curr){
                    if(!curr[k]){
                        ok = false;
                        break;
                    }
                }
                
                // if filled then take the min farthestdistance index
                if(ok){
                    if(farthest > fartherestHere){
                        farthest = fartherestHere;
                        index = i;
                    }
                }
          }
    }
    return index
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;