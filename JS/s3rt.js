window.onload=function(){
    chrome.storage.local.get(['hlink'], function(result){
        document.getElementById("link").value = result.hlink;
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
document.getElementById('hpasschange').addEventListener('click',function(){

    var l=document.getElementById('hextpass').value;
    // console.log(l)
    chrome.storage.local.set({hpass: l}, function() {
        
        a=' Hidden password updated ';
        alert(a)
        }); });

document.getElementById('hbtn').addEventListener('click',function(){
    // console.log('submitting link');
    var l=document.getElementById('link').value;
    // console.log(l)
    chrome.storage.local.set({hlink: l}, function() {
        
        a=l+' is added to hidden pass';
        alert(a)
        }); });
}