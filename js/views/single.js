function singleTemplate(data) {	
	return `
		<h2> Contact List </h2>
		<ul>
			<li> <i class="fa fa-user "></i> <span>Name:</span> ${ data.name }</li>
			<li> <i class="fa fa-envelope "></i><span>Email:</span> ${ data.email }</li>
			<li> <i class="fa fa-phone-square "></i><span>Phone Number: </span>${ data.phoneNumber }</li>
			<li> <i class="fa fa-globe "></i><span>Location:</span> ${ data.location }</li>
		</ul>
		<button class="backBtn">Back</button>
		`
};

export default singleTemplate;