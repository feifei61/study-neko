import clientPromise from "./mongodb";
import { ObjectId } from 'mongodb';

let client;
let db;
let users;

async function init() {
    if (db) return
    try {
        client = await clientPromise;
        db = await client.db("test");
        users = db.collection("users");
    } catch (error) {
        throw new Error('failed to establish connection to db')
    }
}

;(
    async () => {
        await init();
    }
)()

export async function getUsers() {
    try {
        if (!users) await init();
        const result = await users
        .find({})
        .toArray();
        return result
    } catch (err) {
        throw new Error('failed to get users')
    }
}

export async function register(input) {
    try {
        if (!users) await init();

        const today = new Date()
        const death = new Date(today.getTime() + 2*24*60*60*1000)

        const result = await users.insertOne({
            _id: new ObjectId(),
            firebase_uid: input.uid,
            death_date: death,
            date: today,
        })

        return result
    } catch (err) {
        console.log(err)
        throw new Error('failed to add to data')
    }
}