import fetch from "node-fetch";

class UnogsClient {
  static async getMediaData() {
    try {
      const response = await fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7-!1900%2C2018-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt100-!%7Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "deca27b37amsh62e1782ae5431fap13af9ajsnd8030a3adbb0",
          "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
        }
      });
      const unogsData = await response.json();
      const mediaArray = unogsData.ITEMS;
      return mediaArray;
    } catch(error) {
      return { error: error.message }
    }
  }

  static async getMediaId() {
    try {
     const response = await fetchmediaId(`https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=${mediaId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "deca27b37amsh62e1782ae5431fap13af9ajsnd8030a3adbb0",
        "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
      }
    })
      const unogsData = await response.json();
      const mediaArray = unogsData.ITEMS;
      return mediaArray;
    } catch(error) {
      return { error: error.message }
    }
  }
}

export default UnogsClient;