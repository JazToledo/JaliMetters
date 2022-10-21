import { RegistrarUsuario } from "../controllers/Usuarios.Controller";

export const querys  ={
    
    /* OBTENER TOTAL DE USUARIOS */
    getAllUsuarios: "SELECT * FROM Usuario",
    /* OBTENER TOTAL DE TARIFAS */
    getAllTarifas: "SELECT * FROM Tarifas",
    /* OBTENER TOTAL DE Historial */
    getAllHistorial: "SELECT * FROM HistorialA",

    /* CREAR USUARIO*/
    addNewUsuario: "INSERT INTO Usuario (NombreUsu, ApellidoPaUsu, ApellidoMaUsu, ContrasenaUsu, EmailUsu) VALUES (@NombreUsu, @ApellidoPaUsu, @ApellidoMaUsu,@ContrasenaUsu, @EmailUsu)",
    
    /*Seleccionar Usuario por el id*/
    selectUsuarioById: "SELECT * FROM [Historial_Consumo_Agua].[dbo].[Usuarios] WHERE ID = @ID",
    /*Seleccionar Tarifa por el id*/
    selectTarifaById: "SELECT * FROM [Historial_Consumo_Agua].[dbo].[Tarifas] WHERE IDtarifa = @IDtarifa",
    /*Seleccionar Historial por el id*/
    selectTarifaById: "SELECT * FROM [Historial_Consumo_Agua].[dbo].[HistorialA] WHERE id = @id",

    /* ELIMINAR USUARIO CON ID*/
    deleteUsuario: "DELETE FROM [Historial_Consumo_Agua].[dbo].[Usuarios] WHERE ID = @ID",
    /*Seleccionar Tarifa por el id*/
    deleteTarifaById: "DELETE * FROM [Historial_Consumo_Agua].[dbo].[Tarifas] WHERE IDtarifa = @IDtarifa",
    /*Seleccionar Historial por el id*/
    deleteTarifaById: "DELETE * FROM [Historial_Consumo_Agua].[dbo].[HistorialA] WHERE id = @id",

    getTotalProducts: "SELECT COUNT(*) FROM alumno",
    
    /* ACTUALIZAR USUARIO CON ID*/
    uptdateUsuarioById: "UPDATE Usuarios SET Nombre=@Nombre, ApellidoPa=@ApellidoPa, ApellidoMa=@ApellidoMa, Direccion=@Direccion, NumTel=@NumTel, Sexo=@Sexo, Password=@Password WHERE ID = @ID",
    
    /* Inicio de sesion USUARIO*/
    loginusuario: "SELECT * FROM Usuarios WHERE Nombre=@Nombre and Password=@Password"
}
