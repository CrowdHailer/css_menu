var views = {
		items:[
			{title: "Bakerloo", pathclass:"bakerloo", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ea, optio eveniet tempore odit maiores delectus doloremque provident magnam facere eligendi minus dignissimos a quae id ut distinctio voluptates repudiandae."},
			{title: "Central", pathclass:"central", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ea, optio eveniet tempore odit maiores delectus doloremque provident magnam facere eligendi minus dignissimos a quae id ut distinctio voluptates repudiandae."},
			{title: "Circle", pathclass:"circle", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ea, optio eveniet tempore odit maiores delectus doloremque provident magnam facere eligendi minus dignissimos a quae id ut distinctio voluptates repudiandae."},
			{title: "District", pathclass:"district", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ea, optio eveniet tempore odit maiores delectus doloremque provident magnam facere eligendi minus dignissimos a quae id ut distinctio voluptates repudiandae."},
			{title: "Hammersmith and City", pathclass:"hammersmith", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, ea, optio eveniet tempore odit maiores delectus doloremque provident magnam facere eligendi minus dignissimos a quae id ut distinctio voluptates repudiandae."}
		]
	};
var myApp = {
	init: function (data) {
		var template = document.getElementById('status-accordian').innerHTML;
		var output = Mustache.render(template,data);
		document.getElementById('accordian-area').innerHTML = output;
	}

};
myApp.init(views);
