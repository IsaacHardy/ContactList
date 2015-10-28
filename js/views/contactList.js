function proccessData(data) {
  return data.map(function(item) {
    return `
      <li class='contact-list-item' data-contact-id="${item.objectId}">
      	<i class="fa fa-wheelchair">
      	</i>${item.name}</li>
    `
  }).join('');
}

function contactTemplate(data) {
  return `
    <h2>Contact List</h2>
    <ul>${proccessData(data)}</ul>
  `;
}

export default contactTemplate;