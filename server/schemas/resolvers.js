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
    Mutation:{},
};

module.exports = resolvers;