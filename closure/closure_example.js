var Person = function(){

	var _age = 123 //�� ������ �Լ� ������ ����Ǿ Ŭ���� ���ؽ�Ʈ�� �ӹ���

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
		age : _age,	//Ŭ���� ������ �ƴϰ�, ��ġ age:123 �̶�� ���Ͱ� ����.
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

//���� �ϳ��� �Լ� ������ ���ǵ� �޼ҵ尡 �� �Լ��� ���������� �����ؾ� �� ���..�׸��� �� ���������� ����� ���� 
//�� �޼ҵ忡���� �������� �ݿ��� �Ǿ�� �� ��� Ŭ������ ���ٰ� �� �� ����.


