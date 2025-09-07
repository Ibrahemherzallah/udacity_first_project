import supertest from "supertest";
import app from "../index.js";

const request = supertest(app);

describe("Test API endpoint responses", () => {
  it("should return 400 if missing params", async () => {
    const response = await request.get("/api/images");
    expect(response.status).toBe(400);
  });

  it("should return 404 for missing image", async () => {
    const response = await request.get(
      "/api/images?filename=notfound&width=200&height=200"
    );
    expect(response.status).toBe(404);
  });

  it("should return 200 for valid request", async () => {
    const response = await request.get(
      "/api/images?filename=backpack&width=200&height=200"
    );
    expect(response.status).toBe(200);
  });
});
