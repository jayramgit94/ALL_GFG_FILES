bookhotel(hotelId, function(){//1
    if(error){
        handleError
    }else{
        proceedTopayment(hotelId, function(){//2
            if(error){
                handleError
            }else{
                showbookingstatus(function(){//3
                    if(error){
                        handleError
                    }else{
                        updatebookinghistory(function(){//4)
                            if(error){
                            handleError
                        }else{
                            console.log("booking successful")
                        }
                    })
                }
            })
        }
            
    })
})