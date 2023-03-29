var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var productType = require("../types/productType");
var productModel = require("../../models/product");

exports.update = {
  type: productType.productType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, args) => {
    const UpdatedProduct = await productModel.findByIdAndUpdate(args.id, args);
    if (!UpdatedProduct) {
      throw new Error("Error");
    }
    return UpdatedProduct;
  },
};
