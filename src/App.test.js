import fetchPosts from "./services/fetchPosts";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the dropdown element", () => {
  const { getByLabelText } = render(
    <select id="idsSelectedNews" class="sc-irTswW lhHceo">
      <option value="angular">Angular</option>
      <option value="reactjs">ReactJs</option>
      <option value="vuejs">VueJs</option>
    </select>
  );
});

describe("fetchPosts", () => {
  it("fetches posts from Hacker News API and returns them", async () => {
    const fakePosts = [
      {
        objectID: 1,
        author: "test author 1",
        story_title: "test title 1",
        story_url: "http://test-url.com/1",
        created_at: "2022-04-01T00:00:00.000Z",
        localFavs: false,
      },
      {
        objectID: 2,
        author: "test author 2",
        story_title: "test title 2",
        story_url: "http://test-url.com/2",
        created_at: "2022-04-02T00:00:00.000Z",
        localFavs: false,
      },
      {
        objectID: 3,
        author: "test author 3",
        story_title: "test title 3",
        story_url: "http://test-url.com/3",
        created_at: "2022-04-03T00:00:00.000Z",
        localFavs: false,
      },
    ];
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        hits: fakePosts,
      }),
    });

    const result = await fetchPosts("test");

    expect(result.map(({ localFavs, ...rest }) => rest)).toEqual(
      fakePosts.map(({ localFavs, ...rest }) => rest)
    );
  });
});
