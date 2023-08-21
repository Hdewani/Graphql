import { Resolvers } from "@graphql";

const resolvers: Resolvers = {
  Query: {
    user: async () => {
      return {
        id: 1,
        name: "jhon Doe",
        email: "jhon.doe@gmail.com",
        age: 36,
        phone: 5551234,
      };
    },
  },
};

export default resolvers;
