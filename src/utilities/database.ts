import mysql from "mysql";

const connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    })
    connection.connect((error) => {
        if (error) {
            reject(error);
            return
        }
        resolve(connection)
    });
})

const disconnect = async (connection: mysql.Connection) => {
    return connection.end()
}

const query = async (connection: mysql.Connection, query: string) => new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
        if (error) {
            reject(error)
            return
        }
        resolve(result)
    })
})

export default { connect, disconnect, query }