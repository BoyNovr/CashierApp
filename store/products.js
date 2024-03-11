export const state=()=>({
    products:[
        {id:1,title:'Asus Zenfone',thumbnail:'13.jpg',price:2000000,categoryId:1},
        {id:2,title:'Canon Eos 700d',thumbnail:'13.jpg',price:4300000,categoryId:2},
        {id:3,title:'Canon Eos 750d',thumbnail:'13.jpg',price:400000,categoryId:2},
        {id:4,title:'Iphone 6 Silver',thumbnail:'13.jpg',price:1500000,categoryId:1},
        {id:5,title:'Lenovo A7000',thumbnail:'13.jpg',price:1500000,categoryId:1},
        {id:6,title:'Lg Led Tv 32LF550A',thumbnail:'13.jpg',price:2500000,categoryId:3},
        {id:7,title:'Lg Led Tv 32LFS20A',thumbnail:'13.jpg',price:2500000,categoryId:3},
        {id:8,title:'Mi 4i',thumbnail:'13.jpg',price:1800000,categoryId:1},
        {id:9,title:'Nikon D3200',thumbnail:'13.jpg',price:4500000,categoryId:2},
        {id:10,title:'Nikon D5200',thumbnail:'13.jpg',price:6500000,categoryId:2},
        {id:11,title:'Galaxy A3',thumbnail:'13.jpg',price:3000000,categoryId:1},
        {id:12,title:'Galaxy A8',thumbnail:'13.jpg',price:4100000,categoryId:1},
        {id:13,title:'Galaxy Grand Prime',thumbnail:'13.jpg',price:2100000,categoryId:1},
        {id:14,title:'Galaxy Note 3',thumbnail:'13.jpg',price:4100000,categoryId:1},
        {id:15,title:'Sharp Led TV 32LE265i',thumbnail:'13.jpg',price:2300000,categoryId:3},
        ],
           
        categories:[
        {id:false,title:'ALL'},
        {id:1,title:'Smartphone'},
        {id:2,title:'Kamera'},
        {id:3,title:'televisi'}
        ],
        categoryId:0,
})
export const mutations={
    updateCategoryId(state,categoryId){
        state.categoryId=categoryId
    }
}
export const actions={
    actUpdateCategoryId({commit},categoryId){
        commit('updateCategoryId',categoryId)
       
    }
}