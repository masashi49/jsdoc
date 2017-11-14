import request from 'superagent';


/**
 * superAgentで読まれる非同期
 * @param page urlが入ります
 * @funcction accessApi
 * @returns {Promise}
 */

const accessApi = (page)=> {
  const promise = new Promise((resolve, reject)=> {
    request.get(page).end((err, res)=> {
      if (err || !res.text) {
        reject(err)
      }
      resolve(res)
    })
  });
  return promise
}

export default accessApi

