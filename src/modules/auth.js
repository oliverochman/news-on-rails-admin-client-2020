const storeAuthCredentials = ({ headers }) => {
  const credentials = {
    uid: headers["uid"],
    client: headers["client"],
    access_token: headers["client"],
    expiry: headers["expiry"],
    token_type: "Bearer"
  }
  sessionStorage.setItem("credentials", JSON.stringify(credentials))
}

export { storeAuthCredentials }