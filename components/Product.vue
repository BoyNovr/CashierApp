<template>
<section id="product">
<v-row align="center">
    <v-col cols="10">
        <v-autocomplete
            label="products"
            placeholder="Start typing to search"
            :search-input.sync="search"
            :loading="isLoading"
            :items="itemsSearch"
            item-text="title"
            item-value="_id"
            v-model="selectedSearch"
            return-object
            hide-no-data
            >
        </v-autocomplete>
    </v-col>
    <v-col cols="2">
        <v-menu>
            <template v-slot:activator="{on:category}">
                <v-btn
                v-on="category"
                color="primary">
            Category</v-btn>        
            </template>
            <v-list>
            <v-list-item-group>
            <v-list-item v-for="(category,index) in categories"
            :key="index"
            :disabled="category._id==categoryId"
            @change="updateCategoryIds(category._id)">
            <v-list-item-title>{{ category.title }}</v-list-item-title>
            </v-list-item>

      

            </v-list-item-group> 
            </v-list>
        </v-menu>
    </v-col>
</v-row>


    <v-row>
        <v-col v-for="(product,index) in filteredProducts"
        :key="index" cols="2">
        <v-card 
        @click="addToCarts(product._id)"
        :title="product.title"
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
</section>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default({
    data(){
        return{
            
            search:null,
            isLoading:false,
            itemsSearch:[],
            selectedSearch:null,
        }
    },
    methods:{
        ...mapActions({
            updateCategoryIds:'products/actUpdateCategoryId',
            addToCarts:'carts/addToCart',
            fetchProducts:'products/fetchProducts',
            fetchCategories:'products/fetchCategories'

        }),
        resetSearchCategory(){
            this.updateCategoryIds(0)
        }
    },
    computed:{
        filteredProducts() {
    if (this.categoryId) {
        return this.products.filter(product => product.categoryId === this.categoryId);
    } 
        return this.products;
    
        },
        ...mapState('products',{
            products:'products',
            categories:'categories',
            categoryId:'categoryId'
        })
    },
    watch:{
        search(val){
            console.log(val)
            this.isLoading=true
            setTimeout(()=>{
                this.itemsSearch=this.products.filter(e=>{
                    this.isLoading=false
                    this.resetSearchCategory()
                    return e.title.toLowerCase().includes(val.toLowerCase()); 
                })
                
            },1000)
        },
        selectedSearch(product){
            if(product){
                this.addToCarts(product._id)
            }
        }
    },
    mounted(){
        this.fetchProducts()
        this.fetchCategories()
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