/**
 * Created by aohuoyun on 19/02/20.
 */

var BaseModelConfig= require('./base');

var article = BaseModelConfig.sequelize.define('article', {
    id: {
        type: BaseModelConfig.sequelizeinit.BIGINT,
        primaryKey: true,
    },
    title: {
        type: BaseModelConfig.sequelizeinit.STRING(30),
        allowNull: false
    },
    description: {
        type: BaseModelConfig.sequelizeinit.STRING(50),
        allowNull: true
    },
    detail: {
        type: BaseModelConfig.sequelizeinit.TEXT,
        allowNull: true
    }
});

module.exports = article;