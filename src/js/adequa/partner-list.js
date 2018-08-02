'use strict';

var adequaPartnerList = (function(){

    var listParser = function(raw){
        var list = raw.trim().split('\n').map(function(x){
            return x.trim()
        });

        return list
    };

    var refreshList = function(callback){
        //TODO fetch list from server
        var raw = `
        adequa.oo
        lefigaro.fr
        lemonde.fr
        `;

        var list = listParser(raw) || [];
        vAPI.storage.set({'partnerList': {list, timestamp: Date.now()}});
        µBlock.partnerList = list;

        if(typeof callback === "function")
            callback(list)
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
