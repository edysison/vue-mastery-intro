var app = new Vue({
    el: '#app',
    data:{
        product:'Socks',
        description:'A nice pair of Socks',

        image_source:'imagesource',
        product_link:'productlink',

        inventory:10,
        onSale:true,

        details:['80% cotton','20% polyester','Gender-neutral'],

        variants:[
            {
                variantId:2234,
                variantColor:'green',
                variantSize:['xs','sm','md','lg','xl'],
                variantImage:''
            },
            {
                variantId:2235,
                variantColor:'blue',
                variantSize:['xs','sm','md','lg','xl'],
                variantImage:''
            }
        ],

        cart:0
    
    },

    methods:{
        addToCart: function(){
            this.cart += 1
        },
        updateProduct: function(variantImage){
            this.image = variantImage
        }
    }
})