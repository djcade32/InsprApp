/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSPRAPP_GRAPHQLAPIIDOUTPUT;
const TableName = `User-${AppsyncID}-${env}`;

const userExists = async id => {
  const params = {
    TableName,
    Key: id,
  };

  try {
    const response = await docClient.get(params).promise();
    return !!response?.item;
  } catch (e) {
    return false;
  }
};
const saveUser = async user => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    ...user,
    __typename: 'User',
    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
  };

  const params = {
    TableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  if (!event?.request?.userAttributes) {
    console.log('No user data available');
    return;
  }
  const {sub, email, name} = event.request.userAttributes;
  fullNameArray = name.split(' ');
  const newUser = {
    id: sub,
    firstName: fullNameArray[0],
    lastName: fullNameArray[1],
    email,
  };

  if (!(await userExists(newUser.id))) {
    await saveUser(newUser);
    console.log(`User ${newUser.id} has been saved to DynamoDB`);
    console.log('event: ', event.request.userAttributes);
  } else {
    console.log(`User ${newUser.id} already exists`);
  }
  return event;
};
