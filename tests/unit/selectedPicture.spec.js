import { shallowMount } from "@vue/test-utils";
import selectedPicture from "@/components/selectedPicture.vue";
import albumDisplay from "@/components/albumDisplay.vue";
import commentSection from "@/components/commentSection.vue";

describe("selectedPicture.vue", () => {
  it("displays the username correctly", () => {
    const wrapper = shallowMount(
      selectedPicture,
      // albumDisplay,
      // commentSection,
      {
        global: {
          stubs: ["FontAwesomeIcon"],
        },
      }
    );
    expect(wrapper.find("h3").text()).toContain("username");
  });

  // it("increments the likes count when like button is clicked", async () => {
  //   const wrapper = shallowMount(
  //     selectedPicture,
  //     // albumDisplay,
  //     // commentSection,
  //     {
  //       global: {
  //         stubs: ["FontAwesomeIcon"],
  //       },
  //       props: {
  //         uploadedPicture: {
  //           likes: 10,
  //         },
  //       },
  //     }
  //   );
  //   // console.log(wrapper.html());
  //   const likeButton = wrapper.find("img");
  //   await likeButton.trigger("dblclick");
  //   const updatedLikesCount = wrapper.vm.count;
  //   expect(updatedLikesCount).toBe(11);
  // });

  // it('displays a "1 like" message when there is one like', async () => {});
  // it('emits a "like" event when like button is clicked + dblick on image', async () => {});
  it("it display the full heart when isLiked is true", async () => {
    const wrapper = shallowMount(selectedPicture, {
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    await wrapper.setData({ isLiked: true });
    expect(wrapper.html()).toContain("fa-solid fa-heart");
  });

  it("renders the photo", () => {
    const imageSrc =
      "https://skyandtelescope.org/wp-content/uploads/Gale-crater-hydrated.jpg";
    const wrapper = shallowMount(selectedPicture, {
      global: {
        stubs: ["FontAwesomeIcon"],
      },
      props: {
        uploadedPicture: {
          id: 1,
          username: "username",
          image: imageSrc,
          tags: "#selfie",
          likes: 0,
          created_at: "08/08/2023",
          allComments: [],
        },
      },
    });
    const imgElement = wrapper.find("img");
    expect(imgElement.attributes("src")).toBe(imageSrc);
  });
});

// it('displays a "View all likes" button when there are more than 2 likes', async () => {});
// it('displays a "Share" button for users to share the photo', async () => {});
// it('emits a "share" event when clicking the "Share" button', async () => {});
