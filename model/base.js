/**
 * Created by aohuoyun on 19/02/20.
 */
var moment = require('moment');
var Sequelize = require('sequelize');
var config = require('.././config/config');

var BaseModelconfig = {
    sequelizeinit:Sequelize,
    sequelize:new Sequelize(
        config.db.name,
        config.db.user,
        config.db.passwd,
        {
            'dialect': 'mysql',
            'host': config.db.host,
            'port': config.db.port
        }
    ),
    BaseModel:{
        inc: moment().valueOf(),
        // id生成
        id: function() {
            var new_id = 0;

            // 自增
            this.inc += 1;
            new_id += this.inc;

            return new_id;
        },
        timestamp: function() {

        }
    }
}
module.exports = BaseModelconfig