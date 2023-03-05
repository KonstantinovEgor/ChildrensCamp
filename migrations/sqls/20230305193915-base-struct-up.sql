-- Таблица вожатых --
CREATE TABLE IF NOT EXISTS "DBCW_COUNSELORS" (
    "id"                  UUID    PRIMARY KEY     NOT NULL,
    "full_name"           VARCHAR(100)       NOT NULL,
    "age"                 INTEGER       NOT NULL,
    "createdAt"           TIMESTAMP WITH TIME ZONE      DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"           TIMESTAMP WITH TIME ZONE      DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "DBCW_COUNSELORS" IS 'Таблица вожатых';
COMMENT ON COLUMN "DBCW_COUNSELORS"."id" IS 'Уникальный идентификатор вожатого';
COMMENT ON COLUMN "DBCW_COUNSELORS"."full_name" IS 'ФИО вожатого';
COMMENT ON COLUMN "DBCW_COUNSELORS"."age" IS 'Возраст вожатого';
COMMENT ON COLUMN "DBCW_COUNSELORS"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "DBCW_COUNSELORS"."updatedAt" IS 'Время обновления записи';

-- Таблица групп --
CREATE TABLE IF NOT EXISTS "DBCW_GROUPS" (
    "id"                  UUID    PRIMARY KEY     NOT NULL,
    "counselors_id"       UUID    REFERENCES "DBCW_COUNSELORS"("id")      NOT NULL,
    "group_name"          VARCHAR(100)       NOT NULL,
    "createdAt"           TIMESTAMP WITH TIME ZONE      DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"           TIMESTAMP WITH TIME ZONE      DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "DBCW_GROUPS" IS 'Таблица групп';
COMMENT ON COLUMN "DBCW_GROUPS"."id" IS 'Уникальный идентификатор группы';
COMMENT ON COLUMN "DBCW_GROUPS"."group_name" IS 'Название группы';
COMMENT ON COLUMN "DBCW_GROUPS"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "DBCW_GROUPS"."updatedAt" IS 'Время обновления записи';

-- Таблица детей --
CREATE TABLE IF NOT EXISTS "DBCW_KIDS" (
    "id"                  UUID    PRIMARY KEY     NOT NULL,
    "group_id"            UUID    REFERENCES "DBCW_GROUPS"("id")     NOT NULL,
    "full_name"           VARCHAR(100)       NOT NULL,
    "age"                 INTEGER       NOT NULL,
    "createdAt"           TIMESTAMP WITH TIME ZONE      DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"           TIMESTAMP WITH TIME ZONE      DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "DBCW_KIDS" IS 'Таблица пользователей';
COMMENT ON COLUMN "DBCW_KIDS"."id" IS 'Уникальный идентификатор ребёнка';
COMMENT ON COLUMN "DBCW_KIDS"."group_id" IS 'Ссылка на уникальный идентификатор группы';
COMMENT ON COLUMN "DBCW_KIDS"."full_name" IS 'ФИО ребёнка';
COMMENT ON COLUMN "DBCW_KIDS"."age" IS 'Возраст ребёнка';
COMMENT ON COLUMN "DBCW_KIDS"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "DBCW_KIDS"."updatedAt" IS 'Время обновления записи';

-- Таблица занятий для групп --
CREATE TABLE IF NOT EXISTS "DBCW_TRAINING_SESSIONS" (
    "id"                  UUID    PRIMARY KEY     NOT NULL,
    "group_id"            UUID    REFERENCES "DBCW_GROUPS"("id")     NOT NULL,
    "date"                TIMESTAMP WITH TIME ZONE,
    "createdAt"           TIMESTAMP WITH TIME ZONE      DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"           TIMESTAMP WITH TIME ZONE      DEFAULT CURRENT_TIMESTAMP
);
COMMENT ON TABLE "DBCW_TRAINING_SESSIONS" IS 'Таблица пользователей';
COMMENT ON COLUMN "DBCW_TRAINING_SESSIONS"."id" IS 'Уникальный идентификатор занятия';
COMMENT ON COLUMN "DBCW_TRAINING_SESSIONS"."group_id" IS 'Ссылка на уникальный идентификатор группы';
COMMENT ON COLUMN "DBCW_TRAINING_SESSIONS"."date" IS 'Дата занятия';
COMMENT ON COLUMN "DBCW_TRAINING_SESSIONS"."createdAt" IS 'Время создания записи';
COMMENT ON COLUMN "DBCW_TRAINING_SESSIONS"."updatedAt" IS 'Время обновления записи';

