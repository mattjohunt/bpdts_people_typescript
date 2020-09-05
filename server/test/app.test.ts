import request from "supertest";
import app from "../src/app";

describe("GET /random-url", () => {
    it("should return 404", (done) => {
        request(app).get("/reset")
            .expect(404, done);
    });
});

describe("GET /people", () => {
    it("should return 200 OK", () => {
        return request(app).get("/people")
            .expect(200);
    });
});