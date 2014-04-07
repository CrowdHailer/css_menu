var myApp = {
	menu: {
		init: function (titleBar, controlList, contentContainer, menuLimit) {
			this.titleBar = titleBar;
			this.controlList = controlList;
			this.contentContainer = contentContainer;
			this.menuLimit = menuLimit;
			this.controlItems = controlList.children();
			this.contentItems = contentContainer.children();
			console.log("content container offset " + contentContainer.offset().top);
			console.log("Limit = " +menuLimit);
			this.setLimit();
			this.setTabbing();
			console.log('Tabbing Done');
			this.setDropDown();
			console.log('dropdownDone');
		},
		setLimit: function () {
			var content = this.contentContainer;
			var height = this.menuLimit - content.offset().top;
			console.log(height);
			content.height(height);
		},
		setTabbing: function() {
			var controls = this.controlItems;
			var content = this.contentItems;
			controls.click(function () {
				$self = $(this);
				if (!$self.hasClass('active')) {
					$self.siblings().removeClass('active');
					$self.addClass('active');
					content.slideUp('slow').eq($self.index()).slideDown('slow');
				}
			});
		},
		setDropDown: function () {
			this.titleBar.click(function () {
				$(this).siblings('.menu-controls').slideToggle();
			});
			var control = this.controlList;
			
			if (control.hasClass('hidden')) {
				
				control.click(function () {
					$(this).slideUp();
				});
			}
		},
		
	}
}

$(document).ready(function () {
	var first = $.extend(true, {}, myApp.menu);
	var second = $.extend(true, {}, myApp.menu);
	first.init($('.dummy'), $('#console > .menu-controls'),$('#console > .menu-content-container'),$('#footer').offset().top);
	second.init($('#this-element .menu-header'),$('#this-element .menu-controls'),$('#this-element .menu-content-container'),$('#footer').offset().top);
});