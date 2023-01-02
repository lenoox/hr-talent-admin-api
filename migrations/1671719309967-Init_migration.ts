import { MigrationInterface, QueryRunner } from "typeorm"
import * as fs from "fs";
const { join } = require("path");

const readSqlFile = (filepath: string): string[] => {
    return fs
        .readFileSync(join(process.cwd(),filepath))
        .toString()
        .replace(/\r?\n|\r/g, '\n')
        .split(';\n')
        .filter((query) => query?.length);
};
export class InitMigration1671719309967 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const queries = readSqlFile('./hr-talent.sql');

        for (let i = 0; i < queries.length; i++) {
            await queryRunner.query(queries[i]);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
