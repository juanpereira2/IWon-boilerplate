const withWPA = require ('next-pwa');
const isProd = process.env.NODE_ENV === 'production'
module.exports = withWPA({
    pwa:{
        dest:'public',
        disable: !isProd 
    }
})