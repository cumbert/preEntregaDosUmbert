const products = [

    {
        id: '1',
        titulo: 'Pantalón 01',
        imagen: '../img/pantalon_01.jpg',
        category:'pantalones',    
        precio: 10000,
        stock: 100,
        descripcion:'fdfafdfdada'
    },
    {
        id: '2',
        titulo: 'Pantalón 02',
        imagen: '../img/pantalon_02.jpg',
        category:'pantalones',
        precio: 10000,
        stock: 200,
        descripcion:'fdfafdfdada'
    },
    {
        id: "3",
        titulo: "Pantalón 03",
        imagen: "../img/pantalon_03.jpg",
        category:"pantalones",       
        precio: 10000,
        stock: 50,
        descripcion:"fdfafdfdada"
    },
    {
        id: "4",
        titulo: "Pantalón 04",
        imagen: "../img/pantalon_04.jpg",
        category:"pantalones",
        precio: 10000,
        stock: 50,
        descripcion:"fdfafdfdada"
    },
    {
        id: "5",
        titulo: "Pantalón 05",
        imagen: "../img/pantalon_05.jpg",
        category:"pantalones",
        precio: 10000,
        stock: 30,
        descripcion:"fdfafdfdada"
    },
    {
        id: "6",
        titulo: "Pantalón 06",
        imagen: "../img/pantalon_06.jpg",
        category:"pantalones",
        precio: 10000,
        stock: 20,
        descripcion:"fdfafdfdada"
    },
    {
        id: "7",
        titulo: "Pantalón 07",
        imagen: "../img/pantalon_07.jpg",
        category:"pantalones",
        precio: 10000,
        stock: 20,
        descripcion:"fdfafdfdada"
    },
    {
        id: "8",
        titulo: "Pantalón 08",
        imagen: "../img/pantalon_08.jpg",
        category:"pantalones",
        precio: 10000,
        stock: 60,
        descripcion:"fdfafdfdada"
    }/* ,
    {
        "id": "pantalon_09",
        "titulo": "Pantalón 09",
        "imagen": "./images/pantalones/pantalon_09.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 10000
    },
    {
        "id": "pollera_01",
        "titulo": "Pollera 01",
        "imagen": "./images/polleras/pollera_01.jpg",
        "categoria": {
            "nombre": "Polleras",
            "id": "polleras"
        },
        "precio": 10000
    },
    {
        "id": "pollera_02",
        "titulo": "Pollera 02",
        "imagen": "./images/polleras/pollera_02.jpg",
        "categoria": {
            "nombre": "Polleras",
            "id": "polleras"
        },
        "precio": 10000
    },
    {
        "id": "pollera_03",
        "titulo": "Pollera 03",
        "imagen": "./images/polleras/pollera_03.jpg",
        "categoria": {
            "nombre": "Polleras",
            "id": "polleras"
        },
        "precio": 10000
    },
    {
        "id": "pollera_04",
        "titulo": "Pollera 04",
        "imagen": "./images/polleras/pollera_04.jpg",
        "categoria": {
            "nombre": "Polleras",
            "id": "polleras"
        },
        "precio": 10000
    },
    {
        "id": "campera_01",
        "titulo": "Campera 01",
        "imagen": "./images/camperas/campera_01.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 10000
    },

    {
        "id": "campera_02",
        "titulo": "Campera 02",
        "imagen": "./images/camperas/campera_02.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 10000
    },
    {
        "id": "campera_03",
        "titulo": "Campera 03",
        "imagen": "./images/camperas/campera_03.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 10000
    },
    {
        "id": "campera_04",
        "titulo": "Campera 04",
        "imagen": "./images/camperas/campera_04.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 10000
    },
    {
        "id": "campera_05",
        "titulo": "Campera 05",
        "imagen": "./images/camperas/campera_05.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 10000
    } */

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))          

        },500)
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        },500)
    })
};