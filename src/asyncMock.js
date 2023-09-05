const products = [
    {
        id: '1',
        name:'Termo verde',
        price:1000,
        category:'termos',
        img:'https://i.pinimg.com/564x/0d/64/b0/0d64b080584a0d157ca093b12d443099.jpg',
        stock:23,
        description:'Descripcion del termo verde Stanley'
    },
    {
        id: '2',
        name:'Termo rosa',
        price:1000,
        category:'termos',
        img:'https://i.pinimg.com/564x/bd/86/d9/bd86d9a45e002ea3d191f66424c71a90.jpg',
        stock:25,
        description:'Descripcion del termo rojo Stanley'
    },
    {
        id: '3',
        name:'Termo negro',
        price:1000,
        category:'termos',
        img:'https://i.pinimg.com/564x/ce/23/10/ce231006377d914a17cb050070bf9c91.jpg',
        stock:22,
        description:'Descripcion del termo negro Stanley'
    },
    {
        id: '4',
        name:'Termo Blanco',
        price:1000,
        category:'termos',
        img:'https://i.pinimg.com/564x/1d/8d/36/1d8d3609349e41c610337de8ab5efba6.jpg',
        stock:22,
        description:'Descripcion del termo blanco Stanley'
    },
    {
        id: '5',
        name:'Termo Bala',
        price:1000,
        category:'termos',
        img:'https://i.pinimg.com/564x/37/f0/0a/37f00a28bf89f61ca70b0c165072a9db.jpg',
        stock:22,
        description:'Descripcion del termo bala'
    },
    {
        id: '6',
        name:'Vaso Termico',
        price:1000,
        category:'vasos',
        img:'https://i.pinimg.com/564x/df/3a/bd/df3abd49928874fd4c418809d88fa55a.jpg',
        stock:22,
        description:'Descripcion del Vaso'
    },
    {
        id: '7',
        name:'Vasos Termico',
        price:1000,
        category:'vasos',
        img:'https://i.pinimg.com/564x/20/21/34/202134eeb9895442634545a3d57c90e3.jpg',
        stock:22,
        description:'Descripcion del Vaso'
    },
    {
        id: '8',
        name:'Vaso Termico',
        price:1000,
        category:'vasos',
        img:'https://i.pinimg.com/564x/2d/f0/76/2df07615790a9459c4e2d97bbd81ea3f.jpg',
        stock:22,
        description:'Descripcion del vaso'
    },
]

export const getProducts = () => {
     return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById=(id) =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) => {
        setTimeout (()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

