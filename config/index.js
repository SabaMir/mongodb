let configValues = require('./config.json');

module.exports={
    getDbConnectionString:()=>{
        return "mongodb://ert_10:%40ert1234@clusterendpoints-shard-00-00-bj7vd.mongodb.net:27017,clusterendpoints-shard-00-01-bj7vd.mongodb.net:27017,clusterendpoints-shard-00-02-bj7vd.mongodb.net:27017/test?authSource=admin&replicaSet=Clusterendpoints-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
    }
}