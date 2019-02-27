/**
 * Created by aohuoyun on 19/02/25.
 */
var express = require('express');
var router = express.Router();
var status_code = require('.././helper/status_code');
var article = require('../.././model/article');
var xss = require('xss');

var addArticleHandler = function(req,res){
	let title = xss(req.body.title);
	let description = xss(req.body.description) || "";
	let detail = xss(req.body.detail) || "";
	article.findOne({
		where:{
			title:title
		}
	}).then(function(response){
		if(response){
			res.make_response(
                status_code.ERROR_ARTICLE_ADD,
                status_code.ERROR_ARTICLE_ADD_MSG
            );
		}else{
			article.create({
				title:title,
				description:description,
				detail:detail
			}).then(function(result){
				if(result){
					res.make_response(
		                status_code.SUCCESS,
		                status_code.SUCCESS_MSG
		            );
				}else{
					res.make_response(
		                status_code.ERROR_RESULT,
		                status_code.ERROR_RESULT_MSG
		            );
				}
			});
		}
	});
}

router.post('/addArticle', addArticleHandler);

module.exports = router;