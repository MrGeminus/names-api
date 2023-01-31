import database from "../utilities/database";

const findNameById = async (id: number) => {
    const query = `SELECT value FROM names WHERE id='${id}'`
    const connection = await database.connect()
    const results = await database.query(connection, query)
    database.disconnect(connection)
    return results
};

const findAllNames = async () => {
    const query = "SELECT * FROM names"
    const connection = await database.connect()
    const results = await database.query(connection, query)
    database.disconnect(connection)
    return results
}

const findNamesByGender = async (gender: string) => {
    const query = `SELECT value FROM names WHERE gender='${gender}'`
    const connection = await database.connect()
    const results = await database.query(connection, query)
    await database.disconnect(connection)
    return results
};

const findNamesByCountry = async (country: string) => {
    const query = `SELECT value FROM names WHERE country='${country}'`
    const connection = await database.connect()
    const results = await database.query(connection, query)
    await database.disconnect(connection)
    return results
};

export default { findNameById, findAllNames, findNamesByGender, findNamesByCountry }