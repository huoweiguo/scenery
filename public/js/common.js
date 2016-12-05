var view = {
	init : function(){
		this.render();
		this.emit();
	},

	render :  function(){

	},

	emit : function(){
		var _this = this;
		$(document).on("click",".login-btn",function(){
			var self = $(this),
				regBtn = $(".reg-btn"); 
			_this.moveToL(self,regBtn);
		});

		$(document).on("click",".reg-btn",function(){
			var self = $(this),
				loginBtn = $(".login-btn"); 
			_this.moveToR(self,loginBtn);
		});
	},

	moveToL : function(obj,obj2){
		obj.addClass("login-remove");
		obj2.addClass("rbtn").removeClass("reg-remove");
		$(".login").removeClass("rotateLog2").addClass("rotateLog");
		$(".register").removeClass("rotateReg2").addClass("rotateReg");
	},

	moveToR : function(obj,obj2){
		obj.addClass("reg-remove");
		obj2.addClass("lbtn").removeClass("login-remove");
		$(".login").removeClass("rotateLog").addClass("rotateLog2");
		$(".register").removeClass("rotateReg").addClass("rotateReg2");
	}
};

view.init();