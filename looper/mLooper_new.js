var Looper  = function(__interval, _maxLoop){
	this.loopId = null;
	this.interval = __interval;
	this.maxLoop = _maxLoop;
	this.loopTime = 0;
	
	this.startLoop = function(callbackArr){
		var that = this;
		function loopInstance(){
			if(that.loopTime > that.maxLoop) return;			
			
			var _interval = that.interval;
			try{
				for(var idx in callbackArr){
					if(callbackArr[idx] instanceof Function) callbackArr[idx]();					
				}
			}catch(e){console.log(e.message);}
			
			that.loopId = setTimeout(loopInstance, _interval);
			//console.log((new Date()).getSeconds());
			
			that.loopTime ++;			
		}
		if(!(that.loopId)){
			loopInstance();
		}
	}
	this.stopLoop = function(){
		if(!!(this.loopId)){
			clearTimeout(this.loopId);
			this.loopId = null;
			this.loopTime = 0;
		}			
	}
};