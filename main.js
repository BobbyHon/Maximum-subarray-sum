var maxSequence = function(arr){
    //WOW, had the right code this whole time, spend an hour trying to fix it... it was
    //just ONE value I forgot the change... Cool
      let smallCheck = 0
      let bigCheck = {
        contain: false,
        value: 0,
      }
      let max = 0
      
      arr.reduce((sum, value) =>{
        if (sum + value < smallCheck)
          {
            if (bigCheck.contain && bigCheck.value - smallCheck > max)
              {
                max = bigCheck.value - smallCheck
              }
            smallCheck = sum + value
            bigCheck.contain = false
            bigCheck.value = sum + value
          }
        else if (sum + value > bigCheck.value)
          {
            bigCheck.contain = true
            bigCheck.value = sum + value
          }
        return sum + value
      }, 0)
    
      
      if (bigCheck.contain && bigCheck.value - smallCheck > max)
        {
          max = bigCheck.value - smallCheck
        }
      return max 
    }
    
    
    /* Didn't work
      //Find the lowest point and the highest point by first by 'graphin' the values
      let arr1 = arr.map((value, index) => arr.slice(0, index + 1).reduce((sum, value) => sum + value), 0)
      
      //Find min and max number
      let min = Math.min(...arr1)
      let max = Math.max(...arr1)
      
      console.log(arr)
      console.log(arr1.findIndex((x) => x == min))
      console.log(arr1.findIndex((x) => x == max))
      
      return arr.length == 0 || max < 0 ? 0 : arr1.slice(min, max + 1).reduce((sum, value) => sum + value, 0)
    
    */