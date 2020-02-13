import FetchHelper from '../helpers/FetchHelper';

const HomePageProvider = {
    async getCoordinates(road,city) {

        try {
           let address  = road + ' ' + city;
           const urlData = { address: address };
           // const urlData = {};

            return await FetchHelper.execute("getCoordinatesFromAddress",urlData).then(result => {
                ;
                if(result) {
                    return result;  
                }
            }).catch(error => {
                return Promise.reject(error);
            })
        }
        catch (error) {
            return Promise.reject(error);
        }
    },
    async callUnlimitedApi(road,city) {

        try {
            let address  = road + ' ' + city;
            const urlData = { address: address };

            return await FetchHelper.execute("callNodeApi",urlData).then(result => {
                ;
                if(result) {
                    return result;  
                }
            }).catch(error => {
                return Promise.reject(error);
            })
        }
        catch (error) {
            return Promise.reject(error);
        }
    },
    async getCms() {
        try {
            const urlData = {};
            ;
            return await FetchHelper.execute("blogcategories",urlData).then(result => {
        
                ;
                if(result) {
                    return result;  
                }
            }).catch(error => {
                return Promise.reject(error);
            })
        }
        catch (error) {
            return Promise.reject(error);
        }
    },
}

export default HomePageProvider;