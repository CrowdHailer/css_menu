var myApp = {
	menu: function (controls, content, menuLimit) {
		this.controls = controls;
		this.controlButtons = controls.children('li');
		var controlButtons = this.controlButtons;
		console.log("Length of controls = " + controlButtons.length);
		console.log("Length of content = " + content.length);
		console.log("Offset of the footer is = " + menuLimit);
		console.log("Offset of the content is = " + content.offset().top);
		this.controls = controls;
		this.content = content;
		controls.click
	}
	
}

$(document).ready(function () {
	var first = new myApp.menu($('.menu-controls'), $('#console > .menu-content'), $('#footer').offset().top);
	/*var second = new myApp.menu('zip');*/

});