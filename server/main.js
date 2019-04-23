import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Room = new Mongo.Collection('room');
const Message = new Mongo.Collection('Message');

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('users', function () {
  return Meteor.users.find({})
});

Meteor.methods({
  'AddRoom': function (name) {
    return Room.insert({ name });
  },

  'AddMessage': function (RID, UID, Mes, Name) {
    return Message.insert({
      Room_id: RID, User_id: UID, Message: Mes, UName: Name
    }
    );
    
  }
});


Meteor.publish('getUID', function () {
  return Room.find({})
});
Meteor.publish(
  'getMessage', function (UID) {
    return Message.find({ "Room_id.RID": UID });
}
);
