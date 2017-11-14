import axios from 'axios';

/**
 * axiosを使った非同期
 * @function axios
 */

axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=538d5a0bb971490795914379ca269bc0`)
.then(res => {
  if (res.status === 200) {
    console.log(`axios：` + res.data.results[0].abstract,)
  } else {
    console.log(res)
  }

})
.catch(error => {
  this.sending = false
  throw error
})

export default axios