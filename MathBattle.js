function answer(count){
	if (count <=0) {
		return;
	}
	var res = 0;
	switch(task_op.innerText) {
		case "+":
			res = task_x.innerText*1 + task_y.innerText*1;
			break;
		case "–":
			res = task_x.innerText*1 - task_y.innerText*1;
			break;
		case "×":
			res = task_x.innerText*1 * task_y.innerText*1;
			break;
		case "/":
			res = task_x.innerText*1 / task_y.innerText*1;
			break;
	}
	if (res == task_res.innerText) {
		button_correct.click();
	} else {
		button_wrong.click();
	}
	setTimeout(function(){answer(count-1)}, 100);
}
