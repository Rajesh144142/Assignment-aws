export let host = `${
    process.env.REACT_APP_ENVIRONMENT === "development" ? 'http://127.0.0.1:5000' : `${process.env.REACT_APP_PRODUCTION_API_URL}`
  }`;