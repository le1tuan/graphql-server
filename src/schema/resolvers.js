module.exports = {
    Query: {
        allLinks: async (root, data, {
            mongo: {
                Links
            }
        }) => {
            return await Links.find({}).toArray();
        }
    },
    Mutation: {
       createLink: async (root, data, {mongo: {Links}}) => {
        const response = await Links.insert(data); // 3
        return Object.assign({id: response.insertedIds[0]}, data); // 4
       },
    },
    Link: {
        id: root => root._id || root.id
    }
};