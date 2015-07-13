15.07.06
@ pop up box
confirm("Im in KMS lab");

prompt("like scanf?")

@비교연산자
> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to

@"둘째까지"substring(0,2)
position 사이에 잇는 character를 불러옴

@변수
var 변수명
숫자와 string 모두 가능 

@함수
var sayHello = function(name) {
    console.log('Hello ' + name);
};
**Every line of code in this block must end with a ;

@Return keyword
when the return keyword is used, 
the function will immediately stop running and return the value.


@전역변수 지역변수
@The var keyword creates a new variable in the current scope. 
@var 를 쓰지않으면 무조건 전역변수
@var를 쓰면 그 scope 내에서는 새로운 변수를 생성한다는 의미

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);//will be 14 wow

15.07.07
@반복문
for (var i = 1; i < 11; i = i + 1) {
    /* your code here */;
}
	i += 3	

@배열
var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];

@ String wrapping
긴 문자열을 \ 를 통해 wrap할 수 있다. 이때 warning은 밑의 command를 통해
/*jshint multistr:true */

var text = "askdaslkmdaslkdkwan \
            sadfnlas sd hvlk akwan sadj \
            fj aj dakwan"


@while문

while(condition){
    // Do something!
}

@do~while 문
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);

@숫자가아니면true!
@is Not a Number
isNaN('berry'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42);  // => false
isNaN("42"); // => false (자동으로 숫자로 변환시킨다.)


@스위치문 break가 중요하다 안그럼 default도 출력한다.
switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}


@논리 연산자 && || !(boolean)

15.07.08 
@입력을 대문자로만 받기
var answer = prompt("Question to the user").toUpperCase();
	or .toLowerCase()

@스트링은 배열 고로 length 함수 사용가능한 객체!
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages.length);//5 (원소가 5개)
console.log(languages[2].length);//10 (Javascript는 10글자)

@객체 Object
 변수는 Noun
 함수는 Verb
 그것은 하나로 묶어주는게 ' . ' Object!

Objects are just collections of information (keys and values)
 between curly braces, like this:
객체는 배열처럼 키와 값을 가진게 전부. 다른점은 키가 num,string 다 될 수 있다는 것!

@객체 생성에는 두가지의 방법이 있다. 1.Object Literal notation, 2.Object Construction

1. Object Literal notation
여기서 hash key 를 property 라고 부른다.
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};
	or

var emptyObj = {};


2. Object Construction 
객체를 미리 new로 선언만해준다.
var myObj = new Object();

--	
여기서 1.혹은 2.이후, 두가지의 방법으로 value를 추가할 수 있다.
myObj["name"] = "Charlie";
myObj.name = "Charlie";

@객체도 배열의 원소가 될 수 잇다.
var myObj = {
    type: 'fancy',
    disposition: 'sunny',
    test: 'no'
};

myArray = [myObj];
console.log(myArray[0].type) // => fancy
개신기

@nested obj

var friends = {
        bill : {},
        steve : {}
    };

friends.bill.firstName = 'Bill';
friends.bill.lastName = 'archibald';
friends.bill.number = 0109654979;

friends.steve.firstName = 'Steve';
friends.steve.lastName = 'mahal';
friends.steve.number = 01034979838;

@for/in loop
var list = function(obj){
        for(var key in obj){
                console.log(key);
            }
    };
// console 
=> bill
=> steve

 properties as variables associated with an object.
Similarly,
@ method is just like a function associated with an object.
bob.setAge = function (newAge){
  bob.age = newAge;
};

@function과 methods의 가장 큰 차이점
	function은 파라미터만 사용 할 수 있지만 
methods 는 object가 가진 모든 properties 를 methods 내에서 사용할 수 있다. 

@ this.property =~

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30; // 이렇게 나이를 지정할 수 도 있지만
// and down here we just use the method we already made
bob.setAge = setAge;//bob을 소개합니다. this 가 bob을 의미한다는.
  
// change bob's age to 50 here
bo	b.setAge(50)

this 키워드를 통해 모든 객체에 대한 일반적인 정의를 가지는 methods를 만들 수 있다. 
this 는 placeholder의 역할

15.07.09

@생성자 constructor

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);

	new Object();를 constructor로 사용하는것이 아니라 가 아니라 
	우리가 constructor 를 새로 만들었다.
	즉 new Object(); 는 properties나 methods가 없는 constructor

@ array, loop 내에도 Object가 들어갈 수 있다.

// Our Person constructor
function Person(name,age){
        this.name = name;
        this.age = age;
    }
    
family =[];
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);


// Now we can make an array of people


// loop through our new array
for(var key in family){
        console.log(family[key]);
    }

proud of myself.

@ params로도 Object가 들어갈 수 있다.

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}


@Object array에 새로운 Obj를 추가할 수 있는 add 함수
여기서 배열의 원소개수 -1 이 마지막 원소의 position 이기 때문에 
바로 .length를 postion으로 사용할 수 있다.
function add(firstName, lastName, email, phoneNumber){
        contacts[contacts.length]={
                firstName: firstName,
                lastName: lastName,
                email:  email,
                phoneNumber: phoneNumber
                
            };

















