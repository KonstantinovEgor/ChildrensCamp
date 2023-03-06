module.exports = (DataTypes, sequelize) => {
    const tableName = 'DBCW_COUNSELORS';
    const DBCW_Counselors = sequelize.define('DBCW_Counselors', {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
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

    return DBCW_Counselors;
}