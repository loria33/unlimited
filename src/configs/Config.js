
const Config = {
    
    baseUrl : 'http://localhost:9000',
    strapiUrl:'http://localhost:1337',
    googleBaseUrl : 'https://maps.googleapis.com/maps/api/geocode/json?',
    methods : {
        callNodeApi : {
            url:'baseUrl',
            description: "Get coordinates from adress via Google Api",
            isAuthenticated : true,
            verb : 'GET',
            jsonMethod : true,
            suffixUrl : '/unlimitedApi?address={address}',
            showLoader : true,
            isFlatResponse: false,
            returnMethod:'json',
            returnObject:-1,
        },
        blogcategories : {
            url:'strapiUrl',
            description: "Get Categories from CMS",
            isAuthenticated : true,
            verb : 'GET',
            jsonMethod : true,
            suffixUrl : '/blog-categories',
            showLoader : true,
            isFlatResponse: false,
            returnMethod:'json',
            returnObject:-1,
        },
    },

}


export default Config