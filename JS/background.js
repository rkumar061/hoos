chrome.commands.onCommand.addListener(function(command) {
    // console.log('Command:', command);
    if (command == "toggle-feature-foo"){
        
        // console.log("Initlizing sequence");
        chrome.tabs.query({}, function (tabs) {
            const testarr=[];
            for (var i = 1; i < tabs.length; i++) {
                const lnk=tabs[i].url;
                testarr.push(lnk);
                // console.log('Removing: ',lnk);
                chrome.tabs.remove(tabs[i].id);
            }

            const t2=[];
            t2.push(tabs[0].url)
            for(i=0;i<testarr.length;i++){
             t2.push(testarr[i])
            }
             // console.log('b4 set(t2)--->',t2);
             chrome.storage.local.set({'clnk': t2}, function () {
                 // console.log('urls added');
                 chrome.storage.local.get('clnk', function (result) {
                     // console.log(result.clnk)
                 });
     
             });
        });
        var link

        chrome.storage.local.get(['link1'], function(result) {
            // console.log('Value of link 1 is ' + result.link1);
            link = result.link1;
            chrome.tabs.create({url: link})
            // console.log('adding',link)
          });     
    
        chrome.tabs.query({}, function (tabs) {
        // console.log('Removing: ',tabs[0].title)
        chrome.tabs.remove(tabs[0].id);
        });
      
    }
    else if(command=='toggle-feature-hoo'){
               
        // console.log("Initlizing sequence");
        chrome.tabs.query({}, function (tabs) {
            const testarr=[];
            for (var i = 1; i < tabs.length; i++) {
                const lnk=tabs[i].url;
                testarr.push(lnk);
                // console.log('Removing: ',lnk);
                chrome.tabs.remove(tabs[i].id);
            }

            const t2=[];
            t2.push(tabs[0].url)
            for(i=0;i<testarr.length;i++){
             t2.push(testarr[i])
            }
             // console.log('b4 set(t2)--->',t2);
             chrome.storage.local.set({'clnk': t2}, function () {
                 // console.log('urls added');
                 chrome.storage.local.get('clnk', function (result) {
                     // console.log(result.clnk)
                 });
     
             });
        });
        var link

        chrome.storage.local.get(['link2'], function(result) {
            // console.log('Value of link 1 is ' + result.link2);
            link = result.link2;
            chrome.tabs.create({url: link})
            // console.log('adding',link)
          });     
    
        chrome.tabs.query({}, function (tabs) {
        // console.log('Removing: ',tabs[0].title)
        chrome.tabs.remove(tabs[0].id);
        });
    }
    else if(command=='clear-data'){
        chrome.history.deleteAll(function() {
            // console.log('history deleted')
        })
        chrome.cookies.getAll({domain: ".mydomain.com"}, function(cookies) {
            for(var i=0; i<cookies.length;i++) {
              // console.log(cookies[i]);
        
              chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
            }
          });
    }
  });

 chrome.storage.local.get(['epass'], function(result){
    var pass = result.epass;
    if(!pass){
        chrome.storage.local.set({epass: '12345'}, function() {
            a='default extension password is 12345';
            alert(a)
          });
    }
 });