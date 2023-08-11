import { shallowMount } from "@vue/test-utils";
import selectedPicture from "@/components/selectedPicture.vue";
import albumDisplay from "@/components/albumDisplay.vue";
import commentSection from "@/components/commentSection.vue";

describe("selectedPicture.vue", () => {
  it("displays the username correctly", () => {
    const wrapper = shallowMount(
      selectedPicture,
      albumDisplay,
      commentSection
      // {
      //   global: {
      //     stubs: ["FontAwesomeIcon"],
      //   },
      // }
    );
    expect(wrapper.find("h2").text()).toBe("AlbumDisplay");
  });

  // it("increments the likes count when like button is clicked", async () => {});
  // it('displays a "1 like" message when there is one like', async () => {});
  // it('emits a "like" event when like button is clicked + dblick on image', async () => {});
  // it("it display the full heart when isLiked is true", async () => {
  //   const wrapper = shallowMount(
  //     selectedPicture,
  //     albumDisplay,
  //     commentSection,
  //     {
  // global: {
  //   stubs: ["FontAwesomeIcon"],
  // },
  //   }
  // );
  // await wrapper.setData({ isLiked: true });
  // expect(wrapper.find({ className: "fa-solid" }).exists()).toBe(true);
  // expect(wrapper.classes("fa-heart")).toContain("fa-solid");
  // });
});

// it("renders the photo + caption", () => {});

// it('displays a "View all likes" button when there are more than 2 likes', async () => {});
// it('displays a "Share" button for users to share the photo', async () => {});
// it('emits a "share" event when clicking the "Share" button', async () => {});
