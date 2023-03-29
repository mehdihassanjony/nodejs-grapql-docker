var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var productType = require("../types/productType");
var productModel = require("../../models/product");
exports.add = {
  type: productType.productType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, args) => {
    const uModel = new productModel(args);
    const newProduct = await uModel.save();
    if (!newProduct) {
      throw new Error("error");
    }
    return newProduct;
  },
};
