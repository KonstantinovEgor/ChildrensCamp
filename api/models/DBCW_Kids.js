module.exports = (DataTypes, sequelize) => {
    const tableName = 'DBCW_KIDS';
    const DBCW_Kids = sequelize.define('DBCW_Kids', {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        group_id: {
            type: DataTypes.STRING(36),
            allowNull: false
        },
        full_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        }
    }, { tableName });

    return DBCW_Kids;
}