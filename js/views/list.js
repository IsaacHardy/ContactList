import moment from 'moment';

function listTemplate(data) {
  
  let date = moment(data.createdAt).fromNow();

  return `
    <h2>${data.title} was created on ${date}</h2>
  `
}

export default listTemplate;