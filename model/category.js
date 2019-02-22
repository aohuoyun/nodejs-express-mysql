/**
 * Created by aohuoyun on 19/02/20.
 */
var BaseModelConfig= require('./base');

var category = BaseModelConfig.sequelize.define('category', {
    id: {
        type: BaseModelConfig.sequelizeinit.BIGINT,
        primaryKey: true,
    },
    name: {
        type: BaseModelConfig.sequelizeinit.STRING(20),
        allowNull: true
    },   
});

module.exports = category;