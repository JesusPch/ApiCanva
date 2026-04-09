import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'proyectodb',
    'postgres',
    '1287',
    {
     host:"localhost",
     dialect:"postgres"
    }
);