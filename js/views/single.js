function singleTemplate(data) {	
	return `
		<h2 class="singleH2"><i class="fa fa-wheelchair"></i></h2>
		<ul>
			<li> <i class="fa fa-user "></i>${ data.name }</li>
			<li> <i class="fa fa-envelope "></i>${ data.email }</li>
			<li> <i class="fa fa-phone-square "></i>${ data.phoneNumber }</li>
			<li> <i class="fa fa-globe "></i>${ data.location }</li>
		</ul>
		<button class="backBtn"><i class="fa fa-long-arrow-left"></i></button>
		`
};

export default singleTemplate;