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
                
            }
        },
    },
};

module.exports = resolvers;