'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = connectDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Connects to MongoDB using the MONGODB_URI environment variable.
 *
 * Example .env:
 *   MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/gentrobyte?retryWrites=true&w=majority
 */
async function connectDatabase() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('MONGODB_URI is not defined in environment variables');
    }
    await mongoose_1.default.connect(uri, {
        // Use default mongoose connection options; for a production deployment,
        // you may want to tune the following based on your MongoDB provider.
        autoIndex: true,
    });
    mongoose_1.default.connection.on('connected', () => {
        console.log('✅ MongoDB connected');
    });
    mongoose_1.default.connection.on('error', (error) => {
        console.error('❌ MongoDB connection error:', error);
    });
}
