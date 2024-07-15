function setAuthToken(Authentication_Token) {
  let Auth_Token = {
    Authentication_Token,
    Expires_At: 3,
  };
  localStorage.setItem("Auth-Token", JSON.stringify(Auth_Token));
  alert(
    "Authentication Token Saved Successfully With An Expiration Time In Days."
  );
}
setAuthToken("iasdbiasdgdasigdsa");
