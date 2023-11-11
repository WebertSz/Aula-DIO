let invoice = {

    name: "Mr Robot",
    age: 28,
    products: {
        0: ["Mouse", 29.99],
        1: ["Teclado", 129.99],
        2: ["Monitor", 899.99],
    },
    taxes: 98.90

}

generateInvoice(invoice)

function generateInvoice(invoice){

    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("---------------------------")
    console.log("Os produtos são: ")

    for (let index in invoice.products){

        let [productName, productPrice] = invoice.products[index]

        console.log(`${productName}: R$ ${productPrice}`)

    }
    
}