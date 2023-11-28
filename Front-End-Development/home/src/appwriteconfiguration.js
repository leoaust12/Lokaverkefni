import {Client, Databases, Account} from "appwrite";

export const PROJECT_ID = "6563e9c0b6331c433ba9";
export const DATABASE_ID = "6563eb124480a5ac681e";
export const COLLECTION_ID_MESSAGES = "6563eb2440d8afc5c2b7"

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6563e9c0b6331c433ba9');

export const databases = new Databases(client)
export const account = new Account(client)

export default client;