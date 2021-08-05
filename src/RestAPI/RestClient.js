import axios from 'axios';

class RestClient {

   static GetRequest=(getUrl)=>{
      return axios.get(getUrl).then(response=>{
           return response.data;

        }).catch(error=>{
           return null;
       });
    }


    static  PostRequest=(postURl,postJson)=>{

        return axios.post(postURl,postJson).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        });
    }

}

export default RestClient;
