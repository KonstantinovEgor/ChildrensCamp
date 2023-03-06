module.exports = (DataTypes, sequelize) => {
    const tableName = 'DBCW_TRAINING_SESSIONS';
    const DBCW_TrainingSessions = sequelize.define('DBCW_TrainingSessions', {
        id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        group_id: {
            type: DataTypes.STRING(36),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true
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

    return DBCW_TrainingSessions;
}