// require('dotenv').config;

const host = "https://hackathon-backend-hjyn.onrender.com";
// const host = "https://secondbrain-server.vercel.app";


export const ApiRoutes = {
    signup: `${host}/api/v1/user/signup`,
    signin: `${host}/api/v1/user/signin`,
    contents: `${host}/api/v1/user/contents`,
    alltags: `${host}/api/v1/tag/alltags`,
    createtag: `${host}/api/v1/tag/createtag`,
    create: `${host}/api/v1/content/create`,
    remove: `${host}/api/v1/content/remove`,
    share: `${host}/api/v1/brain/share`,
    shareHexVal: `${host}/api/v1/brain/share/user`,
};