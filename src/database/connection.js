import sql from 'mssql';

const dbSettings = {
    user: 'Tomas',
    password: 'teamo',
    server: 'localHost',
    database: 'JALI2',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export const getConnection = async () => {
    try {
      const pool = await sql.connect(dbSettings);
      return pool;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { sql };