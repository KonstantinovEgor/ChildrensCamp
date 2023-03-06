const BaseController = require('./BaseController');

const helperService = require('../services/HelperService');
const ApiError = require('../errors/ApiError');

class GroupController extends BaseController {
    constructor() {
        super();
    }

    async add(req, res, next) {
        try {
            const pool = req.body;

            helperService.itContains(pool, ['counselors_id', 'group_name'], next);
            const candidate = await super.getOne(
                'DBCW_Group',
                { group_name: pool.group_name },
                req, res, next, false);
            if (candidate)
                return next(ApiError.badRequest(`Группа с названием ${pool.group_name} уже существует`));
            await super.add('DBCW_Group', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async get(req, res, next) {
        try {
            const pool = req.query;
            helperService.itContains(pool, ['id'], next);

            await super.getAll('DBCW_Group', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async getAll(req, res, next) {
        try {
            await super.getAll('DBCW_Group', { }, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }

    async delete(req, res, next) {
        try {
            const pool = req.body;
            helperService.itContains(pool, ['id'], next);

            const candidate = await super.getOne(
                'DBCW_Group',
                { id: pool.id },
                req, res, next, false);
            if (!candidate)
                return next(ApiError.badRequest(`Группы с id=${pool.id} не найдено`))

            await super.del('DBCW_Group', pool, req, res, next);
        } catch(error) {
            next(ApiError.badRequest(error));
        }
    }
}

module.exports = () => {
    const groupController = new GroupController();
    return {
        add: groupController.add,
        get: groupController.get,
        getAll: groupController.getAll,
        delete: groupController.delete
    }
};