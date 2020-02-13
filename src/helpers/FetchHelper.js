import Config from '../configs/Config';
import _ from 'lodash';

//const store = configureStore();

const FetchHelper = {
    async execute(methodName, dynamicUrlData, bodyData) {
        let methodObject = Config.methods[methodName];
        let headers = {
        };
        
      
        let request = {
            method: methodObject.verb,
            headers: headers,
            cache: 'default',
        }


        // check for parameters in url template
        let parsedUrl = methodObject.suffixUrl;
        let regex = new RegExp('{(.*?)}');
        _.each(dynamicUrlData,(item)=> {
            parsedUrl = parsedUrl.replace(regex,(pattern,val)=> {
                return dynamicUrlData[val];
            });
        });

        let url = '';
        if(methodObject.url === 'googleBaseUrl') {
            url = Config.googleBaseUrl + parsedUrl;
        }
        if(methodObject.url === 'strapiUrl') {
            url = Config.strapiUrl + parsedUrl; 
        }
        if(methodObject.url === 'baseUrl') {
            url = Config.baseUrl + parsedUrl;
        }
        
        if (methodObject.verb === "POST" || methodObject.verb === "PUT")
            request.body = JSON.stringify(bodyData);

        try {
            return await fetch(url, request).then(response => {
                ;
                if (response.status >= 200 && response.status < 300) {
                    console.log(url + ' ...200< 300... ' + request );
                        if(methodObject.returnMethod === 'json')
                            return response.json();
                        if(methodObject.returnMethod === 'text')
                            return response.text();
                        
                }
                if (response.status === 500) {
                    console.log(url + ' 500 ' + request );
                    Promise.reject("server error");
                    // handler global error
                }
                if (response.status === 401) {
                    console.log(url + ' .... 401 ' + request );
                    Promise.reject("not authenticated");
                    // handle not authenticated
                }
            }).then (response => {
                if (methodObject.isFlatResponse) {
                    return response;
                } else {
                    if(methodObject.returnObject === 'results')
                            return response.results;
                    else
                            return response;
                } 
            }).catch(error => {
                console.log(url + ' Error....... ' + error );
                Promise.reject(error);
            });
        }
        catch (error) {
            // add report to AppCenter analytics // TODO
            Promise.reject(error);
        }
    }
}

export default FetchHelper;