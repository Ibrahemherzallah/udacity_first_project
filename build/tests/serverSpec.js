"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_js_1 = __importDefault(require("../index.js"));
const request = (0, supertest_1.default)(index_js_1.default);
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
//# sourceMappingURL=serverSpec.js.map
