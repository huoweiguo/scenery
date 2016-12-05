var component = {
	guide : function(req,res,next){
		res.render("guide");
	},

	loginReg : function(req,res,next){
		res.render("logReg");
	}
};

module.exports = component;