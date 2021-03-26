const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList,GraphQLBoolean } = graphql;



const products = [
    { id: 1, name: 'Փոքրիկ Նվերի Տուփ', price: '300Դ',rate:5, available:true,newProduct:true,bestSelling:true,sale:true},
    { id: 2, name: 'Թեյի Բաժակ', price: '4.000Դ',rate:4, available:true,newProduct:true,bestSelling:true,sale:false},
    { id: 3, name: 'Օծանելիք - Դիոր', price: '9000Դ',rate:3, available:true,newProduct:true,bestSelling:true,sale:true},
    { id: 4, name: 'Գիրք - Հեղինակի անուն', price: '6000Դ',rate:3.5, available:true,newProduct:true,bestSelling:true,sale:true},

    { id: 5, name: 'Փոքրիկ Նվերի Տուփ', price: '300Դ',rate:2.5, available:false,newProduct:false,bestSelling:false,sale:true},
    { id: 6, name: 'Թեյի Բաժակ', price: '4000Դ',rate:4.5, available:true,newProduct:true,bestSelling:false,sale:false},
    { id: 7, name: 'Օծանելիք - Դիոր', price: '9000Դ',rate:5, available:false,newProduct:false,bestSelling:false,sale:true},
    { id: 8, name: 'Գիրք - Հեղինակի անուն', price: '450Դ',rate:2, available:false,newProduct:true,bestSelling:false,sale:true},
    { id: 9, name: 'Փոքրիկ Նվերի Տուփ', price: '6000Դ',rate:5, available:false,newProduct:false,bestSelling:false,sale:true},
    { id: 10, name: 'Գիրք - Հեղինակի անուն', price: '150Դ',rate:3.5, available:true,newProduct:false,bestSelling:false,sale:true},

];



const ShopCardType = new GraphQLObjectType({
    name:`Product`,
    fields : () =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        price:{type:GraphQLString},
        rate:{type:GraphQLString},
        available:{type:GraphQLBoolean},
        newProduct:{type:GraphQLBoolean},
        bestSelling:{type:GraphQLBoolean},
        sale:{type:GraphQLBoolean}
    })
})


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        product: {
            type: ShopCardType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return products.find(movie => movie.id === args.id);
            },
        },

        products: {
            type: new GraphQLList(ShopCardType),
            resolve(parent, args) {
                return products;
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});