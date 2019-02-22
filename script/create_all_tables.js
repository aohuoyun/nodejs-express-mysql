/**
 * Created by aohuoyun on 19/02/20.
 */
var User = require('.././model/user');
var Article = require('.././model/article');
var Category = require('.././model/category');

// 创建表
User.sync();
Article.sync();
Category.sync();