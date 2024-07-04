import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://argha10:riju1010@cluster0.bwfvxsk.mongodb.net/blog-app')
    console.log('DB connected');
}