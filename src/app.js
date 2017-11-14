/**
 * Created by yamadamasashi on 2017/11/10.
 */
import cats from './cats';
import superagent from './superagent';
import axios from  './axios_get';

const page = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=538d5a0bb971490795914379ca269bc0`;

/**
 * @param {string} page - URL
 */
class Test2 {
    constructor(page) {
        cats(page);
        axios;

        superagent(page)
            .then((resolve) => {
                console.log('superagent1：' + resolve.body.results[0].abstract)
            })
            .then((resolve) => {
                superagent(page).then((resolve) => {
                    console.log('superagent2：' + resolve.body.results[0].abstract)
                })
            })
            .catch((reject) => {
                console.log(reject)
            })
    }
}


new Test2(page);