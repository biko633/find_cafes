/*
  Warnings:

  - Made the column `name_ar` on table `Cities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name_ar` on table `Countries` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "name_ar" TEXT NOT NULL,
    "country_code_2" TEXT NOT NULL,
    "city_code_2" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    CONSTRAINT "Cities_country_code_2_fkey" FOREIGN KEY ("country_code_2") REFERENCES "Countries" ("country_code_2") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_Cities" ("city_code_2", "country_code_2", "currency", "id", "name", "name_ar") SELECT "city_code_2", "country_code_2", "currency", "id", "name", "name_ar" FROM "Cities";
DROP TABLE "Cities";
ALTER TABLE "new_Cities" RENAME TO "Cities";
CREATE UNIQUE INDEX "Cities_name_key" ON "Cities"("name");
CREATE UNIQUE INDEX "Cities_name_ar_key" ON "Cities"("name_ar");
CREATE UNIQUE INDEX "Cities_city_code_2_key" ON "Cities"("city_code_2");
CREATE TABLE "new_Countries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "name_ar" TEXT NOT NULL,
    "country_code_2" TEXT NOT NULL
);
INSERT INTO "new_Countries" ("country_code_2", "id", "name", "name_ar") SELECT "country_code_2", "id", "name", "name_ar" FROM "Countries";
DROP TABLE "Countries";
ALTER TABLE "new_Countries" RENAME TO "Countries";
CREATE UNIQUE INDEX "Countries_name_key" ON "Countries"("name");
CREATE UNIQUE INDEX "Countries_name_ar_key" ON "Countries"("name_ar");
CREATE UNIQUE INDEX "Countries_country_code_2_key" ON "Countries"("country_code_2");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
