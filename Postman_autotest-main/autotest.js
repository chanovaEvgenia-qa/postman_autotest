// https://swapi.dev/

// 1. Запрос по персонажу (people) с id = 10 https://swapi.dev/api/people/10/

pm.test("Ожидаю статус ответа 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Ожидаю статус ответа 201", function () {
    pm.response.to.have.status(201);
});

pm.test("В Body ответа есть строка", function () {
    pm.expect(pm.response.text()).to.include("Obi-Wan Kenobi");
});

pm.test("Запрос выполнился быстрее чем за 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Конкретное поле = конкретному значению", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Obi-Wan Kenobi");
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

// 2. Запрос за планетой c id = 7 https://swapi.dev/api/planets/7/

pm.test("Ожидаю статус ответа 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Ожидаю статус ответа 201", function () {
    pm.response.to.have.status(201);
});

pm.test("В Body ответа есть строка", function () {
    pm.expect(pm.response.text()).to.include("Endor");
});
pm.test("Запрос выполнился быстрее чем за 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Конкретное поле = конкретному значению", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.climate).to.eql("temperate");
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

// 3. Запрос за космическим кораблём с id = 5 https://swapi.dev/api/starships/5/

pm.test("Ожидаю статус ответа 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Ожидаю статус ответа 201", function () {
    pm.response.to.have.status(201);
});

pm.test("В Body ответа есть строка", function () {
    pm.expect(pm.response.text()).to.include("Sentinel-class landing craft");
});
pm.test("Запрос выполнился быстрее чем за 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Конкретное поле = конкретному значению", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.MGLT).to.eql("70");
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});