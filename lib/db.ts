import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI as string;
const options = {};

// Define a custom type for the global variable
interface CustomGlobal {
  _mongoClientPromise?: Promise<MongoClient> | undefined;
}

const globalWithMongoClient = global as CustomGlobal;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so we don't create multiple instances of MongoClient
  if (!globalWithMongoClient._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongoClient._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongoClient._mongoClientPromise;
} else {
  // In production mode, it's okay to create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
