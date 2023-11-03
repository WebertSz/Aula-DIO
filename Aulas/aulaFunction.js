let userName = getFirstName("Pedro Silva")

createStringConnection("db_products", userName, "12345")
torrar("pão de forma");
let result = soma(5, 5)
console.log(`O valor total é ${result}`)

function torrar(pão){
    console.log(`Torrando ${pão}`)
    injetarPao(pão);
}

function injetarPao(pão){
    console.log(`Preparando para injetar o ${pão}`)
    console.log("Finalizado!")
}

function soma(a, b){
    return a + b
}

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}