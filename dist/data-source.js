"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceConfig = void 0;
require("reflect-metadata");
exports.DataSourceConfig = {
    type: 'sqlite',
    database: '.db/database',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [],
    subscribers: [],
};
//# sourceMappingURL=data-source.js.map