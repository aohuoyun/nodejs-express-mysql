/**
 * Created by aohuoyun on 19/02/20.
 */
var express = require('express');
var router = express.Router();
var status_code = require('.././helper/status_code');
var Category = require('../.././model/category');

var addCategoryHandler = function(req,res){
	var name = req.body.name || '';
	if (name) {
        // 查询类型名是否已存在
        Category.findOne({
            where: {
                name: name
            }
        }).then(function(response) {
            if (response) {
                res.make_response(
                    status_code.ERROR_CATEGORY_ADD,
                    status_code.ERROR_CATEGORY_ADD_MSG
                );
            } else {
                Category.create({
                    name: name,
                }).then(function(response) {
                    res.make_response(
                        status_code.SUCCESS,
                        status_code.SUCCESS_MSG,
                    );
                });
            }
        });
	}else {
        res.make_response(
            status_code.ERROR_PARAM,
            status_code.ERROR_PARAM_MSG
        );
    }
}

var updateCategoryHandler = function(req,res){
	var id = req.body.id;
	var name = req.body.name;
	Category.findOne({
        where: {
            name: name
        }
    }).then(function(response){
    	if((response.name == name && response.id == id) || !response){
    			Category.update({
				    name:name
				},{
				    where:{
				        id:id
				    }
				}).then(function(result){
			        if(result){
			        	res.make_response(
	                        status_code.SUCCESS,
	                        status_code.SUCCESS_MSG,
	                    );
			        }
				});
    		}else{
    			res.make_response(
		            status_code.ERROR_CATEGORY_ADD,
		            status_code.ERROR_CATEGORY_ADD_MSG
		        );
    		}
    })
}

var delateCategoryHandler = function(req,res){
	var id = req.body.id;
	if(id){
		Category.destroy({
		    where:{
		        id:id
		    }
		}).then(function(result){
	        res.make_response(
	            "0","删除成功"
	        );
		});
	}else{
		res.make_response(
            "1001","类型标识不能为空"
        );
	}
}

var queryCategoryListHandler = function(req,res){
	Category.findAll().then(function(response){
		if(response){
			res.make_response(
	            "0","查询成功",response
	        );
		}
	});
}

router.post('/addCategory', addCategoryHandler);
router.post('/updateCategory', updateCategoryHandler);
router.post('/delateCategory', delateCategoryHandler);
router.post('/queryCategoryList', queryCategoryListHandler);

module.exports = router;