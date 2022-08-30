const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query : {
        singleUser : async(parent, args, context) =>{
            if(context.user){
                return User.findOne({
                    _id: context.user._id,
                });
            }
            throw new AuthenticationError('Please Log in');
        }
    },
    Mutation:{
        newUser: async (parent, {username,email,password}) =>{
            const user = await User.create({username, email, password});
            const token = signToken(user);
            return { user, token};
        },
        login: async(parent, {email,password}) => {
            const user = User.findOne({email});

            if(!user){
                throw new AuthenticationError('No account with this email found')
            }
            const checkPass = await user.isCorrectPassword(password);
            if(!checkPass){
                throw new AuthenticationError('Password Incorrect!')
            }
            const token = signToken(user);
            return {token, user};
        },
        saveBook: async (parent, args, context) => {
            if(context.user) {
                const addSave = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $push: { savedBooks: args.input } },
                    { new: true }
                );
                return addSave;
            }
            throw new AuthenticationError('Must be logged in to save a book')
        },
        deleteBook: async (parent, args, context) => {
            if(context.user){
                const userInfo = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {savedBooks: {bookId: args.bookId}}},
                    {new: true}
                )
                return userInfo;
            }
            throw new AuthenticationError("Must be logged in to perform this action!")
        }
    },
};

module.exports = resolvers;