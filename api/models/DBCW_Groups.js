module.exports = (DataTypes, sequelize) => {
    const tableName = 'DBCW_GROUPS';
    const DBCW_Group = sequelize.define('DBCW_Group', {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        counselors_id: {
            type: DataTypes.STRING(36),
            allowNull: false
        },
        group_name: {
            type: DataTypes.STRING(100),
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

    return DBCW_Group;
}