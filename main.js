class ProductManager{
    constructor(){
        this.products = []
        this.nextId = 1
    }

    addProduct(product){
        if(!this.isProductValid(product)){
            console.log("Error: el producto no es valido")
            return
        }

        if(this.isCodeDuplicate(product.code)){
            console.log("Error: el codigo del producto ya se encuentra en uso")
            return
        }
        product.id = this.nextId++
        this.products.push(product)
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const product =this.products.find((p)=>p.id === id)
        if(product){
            return product
        }else{
            console.log("Error: producto no encontrado")
        }
    }

    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code){
        return this.products.some((p)=>p.code === code)
    }
}

const productManager = new ProductManager()

productManager.addProduct({
    title: "Producto A",
    description: "Este es el producto A",
    price: 100,
    thumbnail: "/imagenProductoA.jpg",
    code: "001",
    stock: 10
})

productManager.addProduct({
    title: "Producto B",
    description: "Este es el producto B",
    price: 250,
    thumbnail: "/imagenProductoB.jpg",
    code: "002",
    stock: 15
})

const productsList = productManager.getProducts()
console.log(productsList)

const productId = productManager.getProductById(2)
console.log(productId)

const noProduct = productManager.getProductById(8)