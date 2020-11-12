const dev = {
    endpoints: {
        gateway: 'http://localhost:8080/api/v1'
    }
}

const prod = {
    endpoints: {
        gateway: 'api-gateway-sr.cfapps.us10.hana.ondemand.com/api/v1'
    }
}

export const config ={
    stage: process.env.REACT_APP_STAGE, 
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev)
}
