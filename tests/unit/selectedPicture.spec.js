import { shallowMount } from "@vue/test-utils";
import selectedPicture from "@/components/selectedPicture.vue";

describe("selectedPicture.vue", () => {
  it("displays the username correctly", () => {
    const wrapper = shallowMount(selectedPicture, {
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    expect(wrapper.find("h3").text()).toContain("username");
  });

  it("it display the full heart when isLiked is true and the reverse", async () => {
    const wrapper = shallowMount(selectedPicture, {
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    await wrapper.setData({ isLiked: true });
    expect(wrapper.html()).toContain("fa-solid fa-heart");

    await wrapper.setData({ isLiked: false });
    expect(wrapper.html()).toContain("fa-regular fa-heart");
  });

  it("renders the photo and other data", () => {
    const imageSrc =
      "https://skyandtelescope.org/wp-content/uploads/Gale-crater-hydrated.jpg";
    const wrapper = shallowMount(selectedPicture, {
      global: {
        stubs: ["FontAwesomeIcon"],
      },
      props: {
        uploadedPicture: {
          id: 1,
          username: "david",
          image: imageSrc,
          tags: "#selfie",
          likes: 5,
          created_at: "08/08/2023",
          allComments: [],
        },
      },
    });
    const imgElement = wrapper.find("img");
    expect(imgElement.attributes("src")).toBe(imageSrc);
    expect(wrapper.find("h3").text()).toBe("david");
    expect(wrapper.find(".tags").text()).toBe("#selfie");
    expect(wrapper.find(".icons").text()).toContain("5");
  });

  it("increments the likes count when like button is clicked", async () => {
    const wrapper = shallowMount(selectedPicture, {
      global: {
        stubs: ["FontAwesomeIcon"],
      },
      props: {
        uploadedPicture: {
          id: 1,
          username: "david",
          image: "https://placehold.co/400",
          tags: "#selfie",
          likes: 5,
          created_at: "08/08/2023",
          allComments: [],
        },
      },
    });
    const likeButton = wrapper.find("img");
    await likeButton.trigger("dblclick");
    expect(wrapper.find(".icons").text()).toContain("6");
  });

  it('emits a "toggleComments" event when toggle comments button is clicked', async () => {
    const uploadedPicture = {
      id: 1,
      username: "david",
      image: "https://placehold.co/400",
      tags: "#selfie",
      likes: 5,
      created_at: "08/08/2023",
      allComments: [
        {
          cmtid: 1,
          userid: "lilynniebby",
          message: "This is literally so Taylor swift coded.",
        },
      ],
    };

    const wrapper = shallowMount(selectedPicture, {
      global: {
        stubs: ["FontAwesomeIcon"],
      },
      props: { uploadedPicture },
      emits: ["toggleComments"],
    });

    const toggleCommentsButton = wrapper.find("button");
    await toggleCommentsButton.trigger("click");
    expect(wrapper.emitted().toggleComments).toBeTruthy();
  });

  it('adds a comment when "Add Comment" button is clicked', async () => {
    const uploadedPicture = {
      id: 1,
      username: "david",
      image: "https://placehold.co/400",
      tags: "#selfie",
      likes: 5,
      created_at: "08/08/2023",
      allComments: [],
    };

    const wrapper = shallowMount(selectedPicture, {
      global: {
        stubs: ["FontAwesomeIcon"],
      },
      props: { uploadedPicture },
    });

    const newComment = "Test comment";
    const commentInput = wrapper.find(".comment-input input");
    await commentInput.setValue(newComment);

    const addButton = wrapper.find(".comment-input button");
    await addButton.trigger("click");

    expect(wrapper.vm.uploadedPicture.allComments).toHaveLength(1);
    expect(wrapper.vm.uploadedPicture.allComments[0].message).toBe(newComment);
  });
});
