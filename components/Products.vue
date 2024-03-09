<template>
    <v-row>
        <v-col v-for="(product,index) in products" cols="2">
        <v-card :title="product.title"
        :ripple="true"
        >
            <v-card-actions>
                <v-img :src="require(`@/assets/images/products/${product.thumbnail}`)"></v-img>
            </v-card-actions>
            <v-card-text align="center" class="product-title">
                {{ product.title }}
            </v-card-text>
        </v-card>
        </v-col>
    </v-row>
</template>

<script>

export default({
    data(){
        return{
            products:[
            {id:1,title:'Asus Zenfone',thumbnail:'13.jpg',price:2000000,category:1},
            {id:2,title:'Canon Eos 700d',thumbnail:'13.jpg',price:4300000,category:2},
            {id:3,title:'Canon Eos 750d',thumbnail:'13.jpg',price:400000,category:2},
            {id:4,title:'Iphone 6 Silver',thumbnail:'13.jpg',price:1500000,category:1},
            {id:5,title:'Lenovo A7000',thumbnail:'13.jpg',price:1500000,category:1},
            {id:6,title:'Lg Led Tv 32LF550A',thumbnail:'13.jpg',price:2500000,category:3},
            {id:7,title:'Lg Led Tv 32LFS20A',thumbnail:'13.jpg',price:2500000,category:3},
            {id:8,title:'Mi 4i',thumbnail:'13.jpg',price:1800000,category:1},
            {id:9,title:'Nikon D3200',thumbnail:'13.jpg',price:4500000,category:2},
            {id:10,title:'Nikon D5200',thumbnail:'13.jpg',price:6500000,category:2},
            {id:11,title:'Galaxy A3',thumbnail:'13.jpg',price:3000000,category:1},
            {id:12,title:'Galaxy A8',thumbnail:'13.jpg',price:4100000,category:1},
            {id:13,title:'Galaxy Grand Prime',thumbnail:'13.jpg',price:2100000,category:1},
            {id:14,title:'Galaxy Note 3',thumbnail:'13.jpg',price:4100000,category:1},
            {id:15,title:'Sharp Led TV 32LE265i',thumbnail:'13.jpg',price:2300000,category:3},
           


            ]
        }
    }
})
</script>

<style scoped>
    .product-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
</style>