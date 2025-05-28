-- CreateTable
CREATE TABLE "Cafes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name_en" TEXT NOT NULL,
    "name_ar" TEXT NOT NULL,
    "map_url" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "latitude" REAL NOT NULL DEFAULT 0,
    "longitude" REAL NOT NULL DEFAULT 0,
    "toilets" INTEGER NOT NULL DEFAULT 0,
    "wifi" INTEGER NOT NULL DEFAULT 0,
    "wheelchair_accessible" INTEGER NOT NULL DEFAULT 0,
    "accepts_reservations" INTEGER NOT NULL DEFAULT 0,
    "family_friendly" INTEGER NOT NULL DEFAULT 0,
    "price_per_person" TEXT NOT NULL,
    "city_code_2" TEXT NOT NULL,
    CONSTRAINT "Cafes_city_code_2_fkey" FOREIGN KEY ("city_code_2") REFERENCES "Cities" ("city_code_2") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country_code_2" TEXT NOT NULL,
    "city_code_2" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    CONSTRAINT "Cities_country_code_2_fkey" FOREIGN KEY ("country_code_2") REFERENCES "Countries" ("country_code_2") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Countries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country_code_2" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cafes_name_en_key" ON "Cafes"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "Cafes_name_ar_key" ON "Cafes"("name_ar");

-- CreateIndex
CREATE UNIQUE INDEX "Cities_name_key" ON "Cities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Cities_city_code_2_key" ON "Cities"("city_code_2");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_name_key" ON "Countries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_country_code_2_key" ON "Countries"("country_code_2");
