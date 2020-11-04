let q = prompt('Are you a dreamer?', '');

if (q == 'yes') {
	alert('Cool!' );
  alert('pls do not die' );
}
else {
	alert('Very bad.' );
}

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}


// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/