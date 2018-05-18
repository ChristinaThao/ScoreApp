import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  /*Players.insert({
      name: 'Tobi',
      score: 47
  });
  */
  console.log(Players.find().fetch());
});
