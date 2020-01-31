const Config = {
    
    baseUrl : 'https://api.unlimited',
    baseUrl : 'https://google.api',
    methods : {
        searchByAdress : {
            description: "Get conversation list for user per org",
            isAuthenticated : true,
            verb : 'POST',
            sendDeviceKey : true,
            jsonMethod : true,
            suffixUrl : '/conversations',
            showLoader : true,
            isFlatResponse: false
        },
        getCoordinatesFromAddress : {
            description: "Get coordinates from adress via Google Api",
            isAuthenticated : true,
            verb : 'POST',
            sendDeviceKey : true,
            jsonMethod : true,
            suffixUrl : '/conversations',
            showLoader : true,
            isFlatResponse: false
        },
        createLead : {
            description: "Get coordinates from adress via Google Api",
            isAuthenticated : true,
            verb : 'POST',
            sendDeviceKey : true,
            jsonMethod : true,
            suffixUrl : '/conversations',
            showLoader : true,
            isFlatResponse: false
        },
    },

}


export default Config