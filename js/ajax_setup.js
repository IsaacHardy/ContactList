import $ from 'jquery';

const APP_ID = 'o6UIfcNFdJioQfVD2O4zzHdO9UbPKwG8Hmd5yXtJ';
const API_KEY = 'ZYGCAVD0oqzfpImCFgUfIs9VFZ9K8cZudjUk3eqt';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});