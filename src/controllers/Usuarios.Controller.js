import bcryptjs from "bcryptjs";
import { getConnection, querys, sql } from "../database";

//
export const RegistrateAqui = async (req, res) => {
    res.render('RegistrateAqui');
    };


export const UsuarioAdministrador = async (req, res) => {
    const { aguam3, TarifasPrecio, resultmul } = req.body;
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTarifas);
    const r=0;
    res.render('UsuarioAdministrador',{
        result,
        r
    });
    };

export const UsuarioDefault = async (req, res) => {
    const { aguam3, TarifasPrecio, resultmul } = req.body;
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTarifas);
    const r=0;
    res.render('UsuarioDefault',{
        result,
        r,
    });
    };

    export const HOME = async (req, res) => {
        res.render('PaginaPrincipal');
        };

export const CalcularConsumo = async (req, res) => {
    const { aguam3, TarifasPrecio } = req.body;
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTarifas);
    function multiplicar() {
        const m1 = aguam3;
        const m2 = TarifasPrecio;
        const r = m1*m2;
        console.log(r);
        res.render('UsuarioDefault',{
            r,
            result,
        });
    }
    console.log(multiplicar());   
    };

export const InformacionTHUsuarioDefault = async (req, res) => {
    const pool = await getConnection();
    const Tarifas = await pool.request().query(querys.getAllTarifas);
    const Historial = await pool.request().query(querys.getAllHistorial);
    res.render('InformacionTHUsuarioDefault',{
        Tarifas,
        Historial
    });
    };

//configuracion donde se miraran todos los usuarios registrados
export const InformacionTHUsuarioAdministrador = async (req, res) => {
    const pool = await getConnection();
    const Tarifas = await pool.request().query(querys.getAllTarifas);
    const Historial = await pool.request().query(querys.getAllHistorial);
    res.render('InformacionTHUsuarioAdministrador',{
        Tarifas,
        Historial
    });
};    

    //configuracion donde se miraran todos los usuarios registrados
    export const Configuracion = async (req, res) => {
        const pool = await getConnection();
        const Usuarios = await pool.request()
        .query(querys.getAllUsuarios);
        res.render('Config',{
            Usuarios
        });
        };  

    //Ruta para editar los registros de usuarios
    export const EditarUsuario = async (req, res) => {
        const {ID} = req.params;    
        const pool = await getConnection();
        const result1 = await pool
            .request()
            .input("ID", req.params.ID)
            .query(querys.selectUsuarioById);
            res.render('Editar',{
                result1
            });
        };


    //Ruta para editar los registros de Tarifas
    export const EditarTarifas = async (req, res) => {
        const {ID} = req.params;    
        const pool = await getConnection();
        const result1 = await pool
            .request()
            .input("ID", req.params.ID)
            .query(querys.selectUsuarioById);
            res.render('Editar',{
                result1
            });
        };

    //Ruta para editar los registros de Tarifas
    export const CrearUsuario = async (req, res) => {
            res.render('Crear');
        };



export const RegistrarUsuario = async (req, res) => {
    const { NombreUsu, ApellidoPaUsu,ApellidoMaUsu,EmailUsu,ContrasenaUsu,Contrasena2} = req.body;
    let ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)(\.zw{2,3,4})+$/;
    const expresion_regular = /^[0-9] {5} $/;
    


    if (NombreUsu == "" || ApellidoPaUsu == "" || ApellidoMaUsu == "" || EmailUsu == "" || ContrasenaUsu == "") {
        res.render('RegistrateAqui',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "No se pueden dejar los campos vacios",
            alertIcon: 'Error', 
            showConfirmButton: false,
            timer: 10000,
            ruta: ""
        });
        /* alert("los campos no deben estar vacios"); */
    }
    else if (NombreUsu.match(/[0-9]/g) || NombreUsu.length <= 3) {
        res.render('RegistrateAqui',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡El nombre no puede contener digitos y debe ser mayor de 3 caracteres!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:10000,
            ruta:''
        });
    }
    else if (ApellidoPaUsu.match(/[0-9]/g) || ApellidoPaUsu.length <= 3) {
        res.render('RegistrateAqui',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡El apellido no puede contener digitos!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:10000,
            ruta:''
        });
    }
    else if (ApellidoMaUsu.match(/[0-9]/g) || ApellidoMaUsu.length <= 3) {
        res.render('RegistrateAqui',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡El apellido no puede contener digitos!",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:10000,
            ruta:''
        });
    }
    else if (ContrasenaUsu.length <= 5 || ContrasenaUsu.search(/\w/)) {
        res.render('RegistrateAqui',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡su contraseña debe de tener al menos 8 caracteres, mayuscula, minuscula y numeros",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:10000,
            ruta:''
        });
    }
    else{
        try {
            const pool = await getConnection();
            
            await pool
                .request()
                .input("NombreUsu", sql.VarChar, NombreUsu)
                .input("ApellidoPaUsu", sql.VarChar, ApellidoPaUsu) 
                .input("ApellidoMaUsu", sql.VarChar, ApellidoMaUsu)
                .input("ContrasenaUsu", sql.VarChar, ContrasenaUsu)
                .input("EmailUsu", sql.VarChar, EmailUsu)
                .query(querys.addNewUsuario);
        
        res.render('RegistrateAqui',{
            alert: true,
            alertTitle: "Registrado",
            alertMessage: "Registro Exitoso",
            alertIcon: 'success',
            showConfirmButton:false,
            timer:1500,
            ruta:''
        });
           } catch (error) {
            res.status(500);
            res.send(error.message);
           }
        }
};


/* Actualizar datos de tabla de usuarios ya registrados*/
export const ActualizarUsuario = async (req, res) => {
    const {ID,Nombre, ApellidoPa, ApellidoMa, NumTel, Direccion, Sexo, Password } = req.body;
    let passswordHaash = await bcryptjs.hash(Password, 8);
    //validacion
    if ( ID == null || Nombre == null || ApellidoPa == null || ApellidoMa == null || NumTel == null || Direccion == null || Sexo == null || Password == null) {
        return res.status(400).json({ msg: "Bad Request. Plase Fill all fields"});
    }

   try {
    const pool = await getConnection();
   await pool
        .request()
        .input("ID", sql.Int, ID)
        .input("NombreUsu", sql.VarChar, NombreUsu)
        .input("ApellidoPaUsu", sql.VarChar, ApellidoPaUsu) 
        .input("ApellidoMaUsu", sql.VarChar, ApellidoMaUsu)
        .input("Contrasena", sql.VarChar, ContrasenaUsu)
        .input("EmailUsu", sql.VarChar, EmailUsu)
        /* .input("Sexo", sql.Char, Sexo)
        .input("Password", sql.VarChar, Password) */
        .query(querys.uptdateUsuarioById);
        res.redirect('/Configuracion');
   } catch (error) {
    res.status(500);
    res.send(error.message);
   }
};

export const InformacionTHUsuarioAdministradorEliminareUsuarioById = async (req, res) => {
    const {ID} = req.params;    
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("ID", req.params.ID)
        .query(querys.deleteUsuario);
        res.redirect('/InformacionTHUsuarioAdministrador');
};

export const ConfiguracionEliminarUsuarioById = async (req, res) => {
    const {ID} = req.params;    
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("ID", req.params.ID)
        .query(querys.deleteUsuario);
        res.redirect('/Configuracion');
};


export const Login = async (req, res) => {
    const { NombreUsu, ContrasenaUsu } = req.body;
    //validacion
    if (NombreUsu == "" || ContrasenaUsu == "") {
        return res.status(400).json({ msg: "Bad Request. Plase Fill all fields"});
    }

   try {
            const pool = await getConnection();
            const result = await pool.request().query(querys.getAllUsuarios);
            const r=0;
            const rows = await pool
            .request()
            .input("Nombre", sql.VarChar, NombreUsu)
            .input("Password", sql.VarChar, ContrasenaUsu)
            .query(querys.loginusuario);
            if (rows.recordset.length != "") {
                res.render('PaginaPrincipal',{
                    result,
                    r
                });
            } else {
                res.send('Cuenta no existente');
            }
        } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};