// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

it("displays the username correctly", () => {});
it("renders the photo + caption", () => {});
it("increments the likes count when like button is clicked", async () => {});
it('emits a "like" event when like button is clicked + dblick on image', async () => {});
it('displays a "1 like" message when there is one like', async () => {});
it('displays a "Share" button for users to share the photo', async () => {});
it('emits a "share" event when clicking the "Share" button', async () => {});
it("change page to show full album", async () => {});

it("opens the user profile when clicking on the username", async () => {});
it("opens a model with an enlarged photo when clicked", async () => {});
it("opens a user profile when username is clicked", async () => {});
it('displays a "View all likes" button when there are more than 2 likes', async () => {});
it('emits a "follow" event when clicking the "Follow" button', async () => {});
it('emits an "unfollow" event when clicking the "Unfollow" button', async () => {});

// send comment
it('displays a "View all comments" button when there are more than 3 comments', async () => {});
it('does not display a "View all comments" button when there are 3 or fewer comments', async () => {});
it('displays a "No comments" message when there are no comments', async () => {});
it('displays a comment editing form when the "Edit" button is clicked', async () => {});
it('emits a "comment-updated" event after editing a comment', async () => {});
it('displays a "Delete" button for the authenticated user\'s own comments', async () => {});
it('does not display a "Delete" button for other users\' comments', async () => {});
it('displays a confirmation dialog when the "Delete" button is clicked', async () => {});
it('emits a "comment-deleted" event after deleting a comment', async () => {});
it('displays the appropriate "Delete" button based on comment ownership', async () => {});
it('displays a "Comment saved" message after successfully editing a comment', async () => {});
it("displays an error message if comments fail to load", async () => {});
it("adds a comment when user submits a new comment", async () => {});
it('displays the "Add Comment" button for authenticated users', async () => {});
it('hides the "Edit" button for comments not belonging to the authenticated user', async () => {});
