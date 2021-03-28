const graphql = require('graphql');

const Products = require('../models/productSchema')

const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt, GraphQLNonNull,GraphQLID,GraphQLList,GraphQLBoolean } = graphql;



const products = [
    { id: 1, name: "Փոքրիկ Նվերի Տուփ", price: "300Դ",rate:5, available:true,newProduct:true,bestSelling:true,sale:true},
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
    name:'Product',
    fields : () =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        price:{type:GraphQLInt},
        rate:{type:GraphQLInt},
        available:{type:GraphQLBoolean},
        newProduct:{type:GraphQLBoolean},
        bestSelling:{type:GraphQLBoolean},
        sale:{type:GraphQLBoolean}
    })
})


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProduct: {
            type: ShopCardType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                price:{ type: new GraphQLNonNull(GraphQLInt) },
                rate:{type:GraphQLInt},
                available:{type:GraphQLBoolean},
                newProduct:{type:GraphQLBoolean},
                bestSelling:{type:GraphQLBoolean},
                sale:{type:GraphQLBoolean}
            },
            resolve(parent, { name, price,rate,available,newProduct,bestSelling,sale }) {
                const product = new Products({
                    name,
                    rate,
                    available,
                    price,
                    newProduct,
                    bestSelling,
                    sale


                });
                return product.save();
            },
        },



    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        product: {
            type: ShopCardType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
               const {id} = args
                return Products.findById(id);
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
    mutation: Mutation,
});