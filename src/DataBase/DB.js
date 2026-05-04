import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'proyectodb',
    'postgres',
    '101287',
    {
     host:"localhost",
     dialect:"postgres"
    }
);