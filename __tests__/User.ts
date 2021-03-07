import { getComments } from "../src/lib/User";

test('get user profile', async () => {
    const userComments = await getComments(343933720,
        "LIf3TVPezlF9x52Tvc4ceSciGuntbBhl",
        0,
        0,
        0,
        0,
        "1614245816",
        "en");
    expect(userComments).toBeDefined();
});
