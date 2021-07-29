
 window.onload=function(){
    document.getElementById('sub').addEventListener('click',function(){
        // console.log('submitting link');
        var l=document.getElementById('link').value;
        // console.log(l)
        chrome.storage.local.set({link1: l}, function() {
            // console.log(l, " link is added");
            a=l+' is added to feature foo';
            alert(a)
          }); });
    
     var linkArray
        chrome.storage.local.get(['link1'], function(result) {
            // console.log('Value currently is ' + result.link1);
            linkArray = result.link1;
            document.getElementById("link").value = linkArray;
          });
          
          
          document.getElementById('sub2').addEventListener('click',function(){
            // console.log('submitting link');
            var l2=document.getElementById('link2').value;
            // console.log(l2)
            chrome.storage.local.set({link2: l2}, function() {
              chrome.storage.local.get(['link2'], function(result) {
                // console.log('Value of link 2 is ' + result.link2);
                link = result.link2;
                // console.log('adding',link)
              });    
                // // console.log(l2, " link is added");
                a=l2+' is added to feature hoo';
                alert(a)
              }); });
        
         var linkArray2
            chrome.storage.local.get(['link2'], function(result) {
                // console.log('Value currently is ' + result.link2);
                linkArray2 = result.link2;
                document.getElementById("link2").value = linkArray2;
              });

        //   chrome.storage.local.get('clnk', function (result) {
        //     // console.log(result.clnk)
        // });

        
  document.getElementById('reopen').addEventListener('click',function(){
    chrome.storage.local.get('clnk', function (result) {
      //  // console.log(result.clnk)
       var enterpass=document.getElementById('extpass').value;
       var cpass;
      clnk=result.clnk;
       // console.log(enterpass)
       chrome.storage.local.get(['epass'], function(result) {
        cpass=result.epass;
        chrome.storage.local.get(['hpass'], function(result) {
        
        hpass=result.hpass;
       if (enterpass==cpass){
       for(i=0;i<clnk.length;i++){
       
        link = clnk[i];
        chrome.tabs.create({url: link})
        // console.log('adding',link)
        }
        // console.log('pass matched')
      }
      else if(enterpass==hpass){
       
        chrome.storage.local.get(['hlink'], function(result){
          chrome.tabs.create({url: result.hlink})
        });
      }
      else{
        alert('wrong password')
      }
     }); });});
 });     
   document.getElementById('changepass').addEventListener('click', function(){
    chrome.storage.local.get(['epass'], function(result){
      var correctpass=result.epass;
      // // console.log(correctpass)
      var opass = document.getElementById('oextpass').value;
      var npass = document.getElementById('nextpass').value;
      if(npass){
        if(opass==correctpass){
          chrome.storage.local.set({epass: npass}, function() {
            a='password changed';
            alert(a)
          });
        }
        else{
          alert('incorrect pass')
        }
      }
      else{
        alert('incomplete fields')
      }
    })
   });        
               
  }
