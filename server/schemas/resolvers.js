const { AuthenticationError } = require('apollo-server-express');
const { Geek, Artifact, Class, Purchased } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.artifacts',
                populate: 'category'
              });
      
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        categories: async () => {
            return await Class.find();
        },
        products: async (parent, { category, name }) => {
            const params = {};
      
            if (category) {
              params.category = category;
            }
            if (name) {
              params.name = {
                $regex: name
              };
            }
            return await Product.find(params).populate('category');
        },
        product: async (parent, { _id }) => {
            return await Artifact.findById(_id).populate('category');
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.artifacts',
                    populate: 'category'
                });
                return user.orders.id(_id);
            }
            throw new AuthenticationError('Not logged in');
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
            return await Artifact.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },
        addOrder: async (parent, { artifacts }, context) => {
            console.log(context);
            if (context.user) {
                const order = new Purchased({ artifacts });
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
                return order;
            }
            throw new AuthenticationError('Not logged in');
        }
    }
};
