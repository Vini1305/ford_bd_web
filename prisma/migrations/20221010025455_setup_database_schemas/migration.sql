-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cadastro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    CONSTRAINT "cadastro_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "veiculo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    CONSTRAINT "veiculo_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "trajeto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "partida" TEXT NOT NULL,
    "chegada" TEXT NOT NULL,
    "pontuacao" INTEGER NOT NULL,
    "veiculoId" TEXT NOT NULL,
    CONSTRAINT "trajeto_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "veiculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "buraco" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "trajetoId" TEXT NOT NULL,
    CONSTRAINT "buraco_trajetoId_fkey" FOREIGN KEY ("trajetoId") REFERENCES "trajeto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "cadastro_customerId_key" ON "cadastro"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "veiculo_placa_key" ON "veiculo"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "veiculo_customerId_key" ON "veiculo"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "buraco_trajetoId_key" ON "buraco"("trajetoId");
