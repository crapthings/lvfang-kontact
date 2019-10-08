var require = meteorInstall({"imports":{"server":{"index.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/server/index.js                                                                   //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

Meteor.publish('contacts', function () {
  return Contacts.find({
    isDeleted: false
  });
});
Meteor.methods({
  newContact(contact) {
    contact.createdAt = contact.updatedAt = new Date();
    contact.isDeleted = false;
    Contacts.insert(contact);
  },

  updateContact(_id, contact) {
    contact.updatedAt = new Date();
    Contacts.update({
      _id
    }, {
      $set: (0, _objectSpread2.default)({}, contact)
    });
  },

  removeContact(_id) {
    Contacts.update({
      _id
    }, {
      $set: {
        isDeleted: true
      }
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////

}},"index.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// imports/index.js                                                                          //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
Contacts = new Mongo.Collection('contacts');
///////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// server/index.js                                                                           //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
module.link("/imports");
module.link("/imports/server");
///////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/server/index.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9zZXJ2ZXIvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvaW5kZXguanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJwdWJsaXNoIiwiQ29udGFjdHMiLCJmaW5kIiwiaXNEZWxldGVkIiwibWV0aG9kcyIsIm5ld0NvbnRhY3QiLCJjb250YWN0IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiRGF0ZSIsImluc2VydCIsInVwZGF0ZUNvbnRhY3QiLCJfaWQiLCJ1cGRhdGUiLCIkc2V0IiwicmVtb3ZlQ29udGFjdCIsIk1vbmdvIiwiQ29sbGVjdGlvbiIsIm1vZHVsZSIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZSxVQUFmLEVBQTJCLFlBQVk7QUFDckMsU0FBT0MsUUFBUSxDQUFDQyxJQUFULENBQWM7QUFDbkJDLGFBQVMsRUFBRTtBQURRLEdBQWQsQ0FBUDtBQUdELENBSkQ7QUFNQUosTUFBTSxDQUFDSyxPQUFQLENBQWU7QUFDYkMsWUFBVSxDQUFDQyxPQUFELEVBQVU7QUFDbEJBLFdBQU8sQ0FBQ0MsU0FBUixHQUFvQkQsT0FBTyxDQUFDRSxTQUFSLEdBQW9CLElBQUlDLElBQUosRUFBeEM7QUFDQUgsV0FBTyxDQUFDSCxTQUFSLEdBQW9CLEtBQXBCO0FBQ0FGLFlBQVEsQ0FBQ1MsTUFBVCxDQUFnQkosT0FBaEI7QUFDRCxHQUxZOztBQU9iSyxlQUFhLENBQUNDLEdBQUQsRUFBTU4sT0FBTixFQUFlO0FBQzFCQSxXQUFPLENBQUNFLFNBQVIsR0FBb0IsSUFBSUMsSUFBSixFQUFwQjtBQUVBUixZQUFRLENBQUNZLE1BQVQsQ0FBZ0I7QUFBRUQ7QUFBRixLQUFoQixFQUF5QjtBQUN2QkUsVUFBSSxrQ0FBT1IsT0FBUDtBQURtQixLQUF6QjtBQUdELEdBYlk7O0FBZWJTLGVBQWEsQ0FBQ0gsR0FBRCxFQUFNO0FBQ2pCWCxZQUFRLENBQUNZLE1BQVQsQ0FBZ0I7QUFBRUQ7QUFBRixLQUFoQixFQUF5QjtBQUFFRSxVQUFJLEVBQUU7QUFBRVgsaUJBQVMsRUFBRTtBQUFiO0FBQVIsS0FBekI7QUFDRDs7QUFqQlksQ0FBZixFOzs7Ozs7Ozs7OztBQ05BRixRQUFRLEdBQUcsSUFBSWUsS0FBSyxDQUFDQyxVQUFWLENBQXFCLFVBQXJCLENBQVgsQzs7Ozs7Ozs7Ozs7QUNBQUMsTUFBTSxDQUFDQyxJQUFQLENBQVksVUFBWjtBQUF3QkQsTUFBTSxDQUFDQyxJQUFQLENBQVksaUJBQVosRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiTWV0ZW9yLnB1Ymxpc2goJ2NvbnRhY3RzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gQ29udGFjdHMuZmluZCh7XG4gICAgaXNEZWxldGVkOiBmYWxzZSxcbiAgfSlcbn0pXG5cbk1ldGVvci5tZXRob2RzKHtcbiAgbmV3Q29udGFjdChjb250YWN0KSB7XG4gICAgY29udGFjdC5jcmVhdGVkQXQgPSBjb250YWN0LnVwZGF0ZWRBdCA9IG5ldyBEYXRlKClcbiAgICBjb250YWN0LmlzRGVsZXRlZCA9IGZhbHNlXG4gICAgQ29udGFjdHMuaW5zZXJ0KGNvbnRhY3QpXG4gIH0sXG5cbiAgdXBkYXRlQ29udGFjdChfaWQsIGNvbnRhY3QpIHtcbiAgICBjb250YWN0LnVwZGF0ZWRBdCA9IG5ldyBEYXRlKClcblxuICAgIENvbnRhY3RzLnVwZGF0ZSh7IF9pZCB9LCB7XG4gICAgICAkc2V0OiB7IC4uLmNvbnRhY3QgfVxuICAgIH0pXG4gIH0sXG5cbiAgcmVtb3ZlQ29udGFjdChfaWQpIHtcbiAgICBDb250YWN0cy51cGRhdGUoeyBfaWQgfSwgeyAkc2V0OiB7IGlzRGVsZXRlZDogdHJ1ZSB9IH0pXG4gIH0sXG59KVxuIiwiQ29udGFjdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignY29udGFjdHMnKVxuIiwiaW1wb3J0ICcvaW1wb3J0cydcbmltcG9ydCAnL2ltcG9ydHMvc2VydmVyJ1xuIl19
