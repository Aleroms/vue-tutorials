import SongItem from "@/components/SongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { describe, test, expect } from "vitest";

describe("SongItem.vue", () => {
  test("render song.display_name", () => {
    const song = {
      display_name: "test",
    };
    const wrapper = shallowMount(SongItem, {
      //2nd option allows us to pass down data
      propsData: {
        song,
      },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });
    const compositionAuthor = wrapper.find(".text-gray-500");
    expect(compositionAuthor.text()).toBe(song.display_name);
  });

  test("render song.docID in id attritube", () => {
    const song = {
      docID: "abc",
    };
    const wrapper = shallowMount(SongItem, {
      //2nd option allows us to pass down data
      propsData: {
        song,
      },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);
  });
});
