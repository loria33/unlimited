const Config = {
    
    baseUrl : 'https://api.unlimited',
    googleBaseUrl : 'https://maps.googleapis.com/maps/api/geocode/json?',
    googleApiKey : 'AIzaSyAeAsLQ2YVwf-EQt9z0agasFElXwurlWXA',
    methods : {
        searchByAdress : {
            description: "Get conversation list for user per org",
            isAuthenticated : true,
            verb : 'POST',
            jsonMethod : true,
            suffixUrl : '/conversations',
            showLoader : true,
            isFlatResponse: false
        },
        getCoordinatesFromAddress : {
            description: "Get coordinates from adress via Google Api",
            isAuthenticated : true,
            verb : 'GET',
            jsonMethod : true,
            suffixUrl : '/conversations',
            showLoader : true,
            isFlatResponse: false
        },
        createLead : {
            description: "Get coordinates from adress via Google Api",
            isAuthenticated : true,
            verb : 'POST',
            jsonMethod : true,
            suffixUrl : '/conversations',
            showLoader : true,
            isFlatResponse: false
        },
    },

}


export default Config