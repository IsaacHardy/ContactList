import Backbone from 'backbone';
import $ from 'jquery';

import contactCollection from './contact_collection';

import homeTemplate from './views/home';
import contactTemplate from './views/contact';
import listTemplate from './views/list';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "contact" : "showContact",
    "contact/:id" : "showSpecificContact",
    "about" : "showAbout"
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.contact = new contactCollection();

    let router = this;

    this.$el.on('click', '.contact-list-item', function(event) {
      let $li = $(event.currentTarget);
      let contactId = $li.data('contact-id');
      router.navigate(`contact/${contactId}`);
      router.showSpecificContact(contactId);
    });
  },

  home: function() {
    console.log('show home page');
    this.$el.html( homeTemplate() );
  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showSpecificContact: function(contactId) {
    let list = this.contact.get(contactId);

    if (list) {
      // todos have fetched and we grabbed the one we want
      this.$el.html( contactTemplate(list.toJSON()) );
    } else {
      // todos not fetched so we need to load the one we want
      let router = this;
      list = this.contact.add({objectId: contactId});
      this.showSpinner();
      list.fetch().then(function() {
        router.$el.html( contactTemplate(list.toJSON()) );
      });
    }

  },

  showContact: function() {
    console.log('show contact page');
    
    this.showSpinner();

    let router = this;

    this.contact.fetch().then(function(){

      router.$el.html( contactTemplate(router.contact.toJSON()) );

    });

  },

  showAbout: function() {
    console.log('show about page');
  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;