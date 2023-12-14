import getUsers from "./getUsers";

describe("getUsers", () => {
  it("should return an array of users", async () => {
    const result = await getUsers();

    expect(result).toEqual([
      {
        name: "Erik",
        group: 1
      },
      {
        name: "Lisa",
        group: 2
      },
      {
        name: "Hampus",
        group: 2
      },
      {
        name: "Linda",
        group: 3
      },
      {
        name: "Eva",
        group: 1
      },
      {
        name: "Anna",
        group: 3
      }
    ]);
  });
});
