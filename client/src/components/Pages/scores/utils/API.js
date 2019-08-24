import axios from "axios";

//REMOVE KEY AFTER TEST. Every key stroke uses up the API data quota...
//...if a valid key is left in "const apiKey"

const apiKey = "paste API Key here";
//  use this key: AIzaSyCou1rS_99RZ66HGwHEiHskLF5Oq1di2l0

//REMOVE KEY AFTER TEST. Every key stroke uses up the API data quota...
//...if a valid key is left in "const apiKey"




export default {
    searchYouTube: function (term) {
        return axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                q: term,
                type: "video",
                key: apiKey

            }
        })
    }
}