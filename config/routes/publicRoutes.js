const publicRoutes = {
    'POST /counselors/add': 'CounselorsController.add',
    'POST /counselors/delete': 'CounselorsController.delete',
    'GET /counselors/get': 'CounselorsController.get',
    'GET /counselors/getAll': 'CounselorsController.getAll',

    'POST /group/add': 'GroupController.add',
    'POST /group/delete': 'GroupController.delete',
    'GET /group/get': 'GroupController.get',
    'GET /group/getAll': 'GroupController.getAll',

    'POST /kid/add': 'KidsController.add',
    'POST /kid/delete': 'KidsController.delete',
    'GET /kid/get': 'KidsController.get',
    'GET /kid/getAll': 'KidsController.getAll',

    'POST /training-session/add': 'TrainingSessionsController.add',
    'POST /training-session/delete': 'TrainingSessionsController.delete',
    'GET /training-session/get': 'TrainingSessionsController.get',
    'GET /training-session/getAll': 'TrainingSessionsController.getAll',
};

module.exports = publicRoutes;