const expect = require("chai").expect;
const request = require("request");

describe("Age Calculator API", function () {
    const baseUrl = "http://localhost:3000";

    //Test 1 - checking the server is running and returns status 200
    it("returns status 200 to check if api works", function (done) {
        request(baseUrl, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // Test 2 - check if correct age is returned for valid birth year
    it("should return correct age for a valid birth year", function (done) {
        request.get(`${baseUrl}/age?year=2000`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // Test 3 - if birth year is current year -- age should be 0
    it("should return age 0 when birth year is current year 2026", function (done) {
        request.get(`${baseUrl}/age?year=2026`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(data.age).to.equal(0);
            done();
        });
    });

    // Test 4 - for birth year the earliest allowed year 1900
    it("should return correct age for birth year 1900", function (done) {
        request.get(`${baseUrl}/age?year=1900`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(data.age).to.equal(126);
            done();
        });
    });

    // Test 5 - birth year cannot be in the future
    it("should return 400 error when birth year is in the future", function (done) {
        request.get(`${baseUrl}/age?year=2030`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(400);
            expect(data.error).to.equal("Birth year cannot be in the future.");
            done();
        });
    });

    // Test 6 - birth year is not a number
    it("should return 400 error for non-numeric birth year", function (done) {
        request.get(`${baseUrl}/age?year=hello`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(400);
            expect(data.error).to.equal("Please provide a valid birth year.");
            done();
        });
    });

    // Test 7 - birth year is before 1900
    it("should return 400 error for birth year before 1900", function (done) {
        request.get(`${baseUrl}/age?year=1800`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(response.statusCode).to.equal(400);
            expect(data.error).to.equal("Please provide a valid birth year after 1900.");
            done();
        });
    });

});