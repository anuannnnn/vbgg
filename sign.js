
              
function check(form) {
    
                      if(form.userid.value == "admin" && form.pswrd.value == "12345") {
                           setTimeout(function()
                           {
                            window.open('target.html');
                           },1000);
                           
                        }
                    //       window.open('target.html')
                    //   }
                      else {
                          alert("Error Password or Username")
                      }
                  }

          
          
          
          
          
          