// Dependencies
require('dotenv').config();
const axios = require('axios');
const request = require("request-promise");
const cheerio = require("cheerio");



const codeforcesProfile = () => {
    return new Promise(async (resolve) => {
        const {CODEFORCES_API_ENDPOINT, CODEFORCES_API_HANDLE} = process.env;
        const url = `${CODEFORCES_API_ENDPOINT}user.info?handles=${CODEFORCES_API_HANDLE}`;
        await axios.get(url).then((res) => {
        
        return resolve({response: res.data.result['0'], success : true});
        }).catch(e => {
            return resolve({message: "Error: Connection Failed !", success : false});
        });    
    })
}

const codeforcesProblems = () => {
    return new Promise(async (resolve, reject) => {
        const {CODEFORCES_API_PROFILE, CODEFORCES_API_HANDLE} = process.env;
        const url = `${CODEFORCES_API_PROFILE}${CODEFORCES_API_HANDLE}`;
        await request(url, (error, response, html) => {
            if(!error && response.statusCode === 200){
                const $ = cheerio.load(html);
                const res = {};
                const order = ["nbAllTime", "nbLastYear", "nblastMonth", "inRowAllTime", "inRowLastYear", "inRowLastMonth"];
                $("._UserActivityFrame_counterValue").each((i, data) => {
                    res[order[i]] = parseInt($(data).text().split(" ")[0]);
                });
                return resolve({response: res, success : true});
            } else {
                return reject({success :false , message: "Error: Connection Failed!"});
            }
        });
    }) 
}

const getCodeForces = async () => {
    const profile = await codeforcesProfile();
    if(!profile.success){
        return profile.message;
    }

    const problems = await codeforcesProblems();
    if(!problems.success){
        return problems.message;
    }

    return {...profile.response, ...problems.response};
}


getCodeForces().then((res) => console.log(res));

const cp_stat = {
    codeforces: async () => {
        return await getCodeForces();
    }
}
module.exports