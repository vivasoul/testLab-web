var Person = function(){

	var _age = 123 //이 변수는 함수 실행이 종료되어도 클로져 컨텍스트에 머무름

	var _getAge = function(){
		return _age;
	};

	var _setAge = function(age){
		_age = age;
	};
	
	var _isOld = function(){
		return _age > 50;
	}

	return {
		age : _age,	//클로져 변수가 아니고, 마치 age:123 이라고 쓴것과 같음.
		getAge : _getAge,
		setAge : _setAge,
		isOld  : _isOld		 		
	};
};

var me = Person();

console.log(me.age);	

console.log(me.isOld());

me.age = 30;	     	

console.log(me.isOld());

console.log(me.getAge());		

me.setAge(30);		

console.log(me.isOld());

//보통 하나의 함수 내에서 정의된 메소드가 그 함수의 지역변수를 참조해야 할 경우..그리고 그 지역변수의 변경된 값이 
//그 메소드에서도 동적으로 반영이 되어야 할 경우 클로져를 쓴다고 할 수 있음.


