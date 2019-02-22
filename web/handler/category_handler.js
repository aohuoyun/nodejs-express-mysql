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
            id: id
        }
    }).then(function(response){
    	if(response){
    		var resdata = response.get('to_dict');
    		console.log(resdata.name);
    		if((resdata.name == name && resdata.id == id) || resdata.name != name){
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
    	}else{
    		res.make_response(
	            status_code.ERROR_PARAM,
	            status_code.ERROR_PARAM_MSG
	        );
    	}
    })
}

router.post('/addCategory', addCategoryHandler);
router.post('/updateCategory', updateCategoryHandler);

module.exports = router;