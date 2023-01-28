export const queries =  {
    getAllClients: "SELECT TOP 3 * FROM Cliente",
    loginClient: "SELECT * FROM Cliente WHERE NroRuc =@ruc"
}