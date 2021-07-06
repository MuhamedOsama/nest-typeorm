import {MigrationInterface, QueryRunner} from "typeorm";

export class addSchool1625510719477 implements MigrationInterface {
    name = 'addSchool1625510719477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "school" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "school"`);
    }

}
