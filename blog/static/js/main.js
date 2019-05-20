
  alert('hello, Gary');
  var name = prompt('How old are you?');
  var answer = prompt('You are '+ name + 'year\'s old.Right?!(Y/N)');
  if (answer = 'Y'){
    alert('thank you ');
  }

    var Go = [1,3,4];
    alert(Go);
    Go.forEach(fuction(value,index){
        console.log(value,index);
    });

  function fruit(name,fruitname,color){
      var name = prompt('你叫什麼名字？')
      var fruitname = prompt('你最喜吃什麼水果？');
      var color = prompt('水果是什麼顏色的？');
      alert(name + '\,你最喜歡吃'+color+'的'+fruitname );
  }
  fruit();
  function calculate(number1,number2){
      number1=prompt('請輸入一個數字\:');
      number2=prompt('請再輸入一個數字\:');
      return number1 + number2;

  }
  alert( calculate());


	<script>
		var name =prompt('請問你叫什麼名字？')
		var a = prompt('你現在幾歲？')
		for (var i=1; i<10; i++){
			a++ ;
			alert(i+'年後\,'+name +'  '+a+'  '+'歲.');

		}
	</script>
  
