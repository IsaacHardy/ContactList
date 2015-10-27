import Backbone from 'Backbone';

let contactModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/ContactList',

  idAttribute: 'objectId'

});

export default contactModel;