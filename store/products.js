import axios from 'axios';
export const state=()=>({
    products:[],
           
        categories:[
        {_id:0,title:'ALL'},
       
        ],
        categoryId:0,
})
export const mutations={
    updateCategoryId(state,categoryId){
        state.categoryId=categoryId
    },
    updateProducts(state,products){
        state.products=products
    },
    updateCategories(state,categories){
        state.categories.push(...categories)

    }
}
export const actions={
    actUpdateCategoryId({commit},categoryId){
        commit('updateCategoryId',categoryId)
       
    },
    // fetchProducts({commit}){
    //     return this.$axios.$get('http://localhost:3000/products').then(response=>{
    //         commit('updateProducts',response.products)
    //     })
    // }
        fetchProducts({ commit }) {
          return axios.get('http://localhost:3000/products').then(response => {
            commit('updateProducts', response.data.products);
          });
        },
        // fetchCategories({ commit }){
        //     return axios.get('http://localhost:3000/products').then(response=>{
        //         commit('updateCategories', response.data.categories)
        //     })
        // }
        async fetchCategories({ commit }) {
            try {
              const response = await axios.get('http://localhost:3000/categories');
              commit('updateCategories', response.data.categories);
            } catch (error) {
              console.error('Failed to fetch categories:', error);
            }
          }
      

}