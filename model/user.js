/**
 * Created by aohuoyun on 19/02/20.
 */

var BaseModelConfig= require('./base');

var User = BaseModelConfig.sequelize.define('user', {
    id: {
        type: BaseModelConfig.sequelizeinit.BIGINT,
        primaryKey: true,
    },
    mail: {
        type: BaseModelConfig.sequelizeinit.STRING(50),
        allowNull: false
    },
    passwd: {
        type: BaseModelConfig.sequelizeinit.STRING(20),
        allowNull: false
    },
    name: {
        type: BaseModelConfig.sequelizeinit.STRING(20),
        allowNull: true
    }
}, {
    indexes: [
        {
            name: 'index_user_1',
            fields: ['mail'],
            unique: true
        },
        {
            name: 'index_user_2',
            fields: ['mail', 'passwd']
        }
    ],
    getterMethods: {
        to_dict: function() {
            return {
                id: this.id,
                name: this.name
            }
        }
    }
});

module.exports = User;