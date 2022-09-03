const request = require("supertest");

describe("API Testing examples", () => {
  it("Checking API connection", async () => {
    const response = await request("https://jsonplaceholder.typicode.com").get(
      "/posts"
    );
    expect(response.statusCode).toBe(300);
  });
});
