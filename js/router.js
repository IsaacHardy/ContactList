import Backbone from 'backbone';
import $ from 'jquery';
import contactCollection from './contact_collection';
import contactTemplate from './views/contactList';
import singleTemplate from './views/single';

let Router = Backbone.Router.extend({

  routes: {
    ""      : "showContact",
    "single/:id" : "showSingle",
  },

  initialize: function(appElement) {
    this.$el = appElement;
    this.$btn = ('.backBtn')

    this.contact = new contactCollection();

    let router = this;

    this.$el.on('click', '.contact-list-item', function(event) {
      let $li = $(event.currentTarget);
      let contactId = $li.data('contact-id');
      router.navigate(`single/${contactId}`);
      router.showSingle(contactId);
    });

  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showSingle: function(contactId) {
    let single = this.contact.get(contactId);
    let router = this;

    if (single) {
      // todos have fetched and we grabbed the one we want
      this.$el.html( singleTemplate(single.toJSON()) );
    } else {
      // todos not fetched so we need to load the one we want
      single = this.contact.add({objectId: contactId});
      this.showSpinner();
      single.fetch().then(function() {
        router.$el.html( singleTemplate(single.toJSON()) );
      });
    }

    this.back = $('.backBtn');

    this.back.on('click', function() {
      router.navigate('', {trigger: true});
    });


  },

  showContact: function() {
    console.log('show contact page');
    
    this.showSpinner();

    let router = this;

    this.contact.fetch().then(function(){

      router.$el.html( contactTemplate(router.contact.toJSON()) );

    }.bind(this));

  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;