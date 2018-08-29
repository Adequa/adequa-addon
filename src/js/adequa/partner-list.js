'use strict';

var adequaPartnerList = (function(){

    const env = 'prod';
    const uri = env.match('dev') ? 'http://localhost:3000/api/' : 'https://admin-equa.com/api/';

    var listParser = function(list){
        var newlist = [];

        for (var item in list)
            newlist.push(item)

        return newlist
    };

    var refreshList = function(callback){
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    var partners = JSON.parse(this.responseText);
                    var list = listParser(partners);
                    vAPI.storage.set({'partnerList': {list, timestamp: Date.now()}});
                    µBlock.partnerList = list;
                    µBlock.partners = partners;

                    if(typeof callback === "function")
                        callback(list)
                }
            }
        };
        req.open('get', uri + 'query-selectors');
        req.send(null);

        // var raw = `
        // lemonde.fr
        // `;
        //
        // var list = listParser(raw) || [];
        // vAPI.storage.set({'partnerList': {list, timestamp: Date.now()}});
        // µBlock.partnerList = list;
        //
        // if(typeof callback === "function")
        //     callback(list)
    };

    var getPartnerList = function(callback){
        var outdatedTime = Date.now() - 24*60*60*1000; //now - 24 hours
        vAPI.storage.get('partnerList', function(data){
            if(data.partnerList === undefined)
                refreshList(function(partnerList){
                    callback(partnerList)
                });
            else if(data.partnerList.timestamp < outdatedTime){
                refreshList(function(partnerList){
                    callback(partnerList)
                });
            }
            else{
                callback(data.partnerList.list)
            }
        })
    };

    var isPartner = function(hostname, callback){
        getPartnerList(function(list){
            callback(list.indexOf(hostname) !== -1)
        })
    };

    var api = function(){
        this.refreshList = refreshList;
        this.isPartner = isPartner;
    };

    getPartnerList(function(list){
        µBlock.partnerList = list;
    });

    return new api()
})();
