//LIKE CRUD OPERATIONS



//4 methods to update documents
//ASSERT module require and strict vertion
const assert = require('assert').strict;
//Method 1:
//parameters: db, document to insert
//collection it is in
//callback for it
exports.insertDocument = (db, document, collection, callback) => {
    //collection argument should be string "name"
    const coll = db.collection(collection);
    //call can now interact with a specific collection
    //document and second callback
    coll.insertOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};
//Method: list all the documents
//Just database name 
exports.findDocuments = (db, collection, callback) => {

    //Get access to the collection
    const coll = db.collection(collection);

    //Find empty so get all documents
    //put the documents into an array
    coll.find().toArray((err, docs) => {
        assert.strictEqual(err, null);
        callback(docs);
    });

};

//Method: remove document
exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    //Delete one method
    //document and a callback
    //document is a javascript object
    coll.deleteOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};

//Method: update document
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    //Update $set -> update operator and 
    //third is null
    //forth error or result of the operation
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};