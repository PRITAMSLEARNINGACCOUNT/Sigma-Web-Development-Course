const url =
  "https://indianrailways.p.rapidapi.com/findstations.php?station=sealdah";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e2ec955e55msh2b15bbddfae4afbp17385fjsn22dcb497060f",
    "x-rapidapi-host": "indianrailways.p.rapidapi.com",
  },
};
async function MainFunc() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
MainFunc();
