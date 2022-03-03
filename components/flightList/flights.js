const axios = require('axios');
const params = {
  access_key: 'b689b268731aef6a0f91f60cd1fcb2c5',
  limit:10
}

async function flightlist() {
    const response = await axios.get('http://api.aviationstack.com/v1/flights?access_key=b689b268731aef6a0f91f60cd1fcb2c5', {params})
    const apiResponse = response.data;
    if (Array.isArray(apiResponse['results'])) {
        apiResponse['results'].forEach(flight => {
            // if (!flight['live']['is_ground']) {
            //     console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
            //         `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
            //         `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
            // }
        });
    }
    return apiResponse
}
//   }).catch(error => {
//     console.log(error);
//   });
// async function flightlist() {
//     try{
//         const response = await axios.request(options) 
//         console.log('stringsdffcf')
//         console.log(response)
//         return response
//     } catch (error){
//         console.log('flight list error')
//         console.log(error)
//     }
// }

export default flightlist;