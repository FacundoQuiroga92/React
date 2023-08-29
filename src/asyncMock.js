const products = [
    {
        id: '1',
        name:'Termo verde',
        price:1000,
        img:'https://i.pinimg.com/564x/0d/64/b0/0d64b080584a0d157ca093b12d443099.jpg',
        stock:23,
        description:'Descripcion del termo verde'
    },
    {
        id: '2',
        name:'Termo rosa',
        price:1000,
        img:'https://i.pinimg.com/564x/bd/86/d9/bd86d9a45e002ea3d191f66424c71a90.jpg',
        stock:25,
        description:'Descripcion del termo rojo'
    },
    {
        id: '3',
        name:'Termo negro',
        price:1000,
        img:'https://i.pinimg.com/564x/ce/23/10/ce231006377d914a17cb050070bf9c91.jpg',
        stock:22,
        description:'Descripcion del termo negro'
    },
    {
        id: '4',
        name:'Termo Blanco',
        price:1000,
        img:'https://i.pinimg.com/564x/1d/8d/36/1d8d3609349e41c610337de8ab5efba6.jpg',
        stock:22,
        description:'Descripcion del termo blanco'
    },
    {
        id: '5',
        name:'Termo Bala',
        price:1000,
        img:'https://i.pinimg.com/564x/37/f0/0a/37f00a28bf89f61ca70b0c165072a9db.jpg',
        stock:22,
        description:'Descripcion del termo bala'
    },
]

export const getProducts = () => {
     return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}


