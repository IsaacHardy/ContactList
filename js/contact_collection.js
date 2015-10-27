import Backbone from 'backbone';
import contactModel from './contact_model';

let contactCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/ContactList',

  model: contactModel,

  parse: function(data) {
    return data.results;
  }

});

export default contactCollection;